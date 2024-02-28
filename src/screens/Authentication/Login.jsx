import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, ScrollView} from 'react-native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {ms, s, vs} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomInput from '../../components/Inputs/CustomInput';
import Validation from '../../components/Validation';
import {EmailRegix} from '../../utils/url';
import {useForm} from 'react-hook-form';
import CustomButton from '../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {USER_DETAILS} from '../../redux/reducer/Holder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleText from '../../components/Header/DoubleText';
import Error from '../../components/Lotties/Error';
const {height} = Dimensions.get('screen');

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [CheckEmail, setCheckEmail] = useState(false);

  const onSubmit = async data => {
    if (data.email == 'user@gmail.com' && data.password == '12345678') {
      dispatch({type: USER_DETAILS, payload: data.email});
      await AsyncStorage.setItem('userDetails', JSON.stringify(data.email));
    } else {
      setCheckEmail(true);
      setTimeout(() => {
        setCheckEmail(false);
      }, 2000);
    }
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});
  return (
    <BackgroundImage
      source={require('../../assets/image/Backgrounds/login.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoubleText first="Welcome!" second="Please login to continue" />
        <View style={{height: height / 3.5}} />
        <View style={styles.second_container}>
          <CustomInput
            name="email"
            rules={{
              required: '*Email is required',
              pattern: {
                value: EmailRegix,
                message: 'Email is not valid',
              },
            }}
            control={control}
            style={styles.textInput}
            textStyle={styles.InputTextStyle}
            placeholder="Enter Email address"
            keyboardType={'email-address'}
            defaultValue="user@gmail.com"
          />
          {errors.email && <Validation title={errors.email.message} />}
          <CustomInput
            password
            name="password"
            rules={{
              required: '*Password is required',
              minLength: {
                value: 8,
                message: '*Password too short (minimum length is 8)',
              },
              maxLength: {
                value: 16,
                message: '*Password too long (maximum length is 16)',
              },
            }}
            control={control}
            placeholder="Enter Password"
            defaultValue="12345678"
          />
          {errors.password && <Validation title={errors.password.message} />}

          <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
          <View style={[GlobalStyle.Row, {marginTop: vs(10)}]}>
            <View style={styles.line} />
            <Text style={styles.Password}>OR</Text>
            <View style={styles.line} />
          </View>
          <View>
            <CustomButton
              dark
              google
              title="Login with Google"
              containerStyle={GlobalStyle.CustomButtonRestyle}
              textRestyle={GlobalStyle.textRestyle}
              // onPress={() =>
              //   navigation.navigate('register', {
              //     type: 'social',
              //   })
              // }
            />
          </View>
          <View
            style={[
              GlobalStyle.Row,
              {
                alignSelf: 'center',
              },
            ]}>
            <Text style={styles.No_Account}>
              If you do not have any account
            </Text>
            <Text
              onPress={() => navigation.navigate('register')}
              style={[styles.No_Account, styles.SignUp]}>
              Sign up
            </Text>
          </View>
          <Text
            onPress={() => navigation.navigate('reset')}
            style={[
              styles.No_Account,
              styles.SignUp,
              {textAlign: 'right', marginBottom: vs(15)},
            ]}>
            Forgot Password?
          </Text>
        </View>
      </ScrollView>
      <Error isVisible={CheckEmail} message={'Check your Email or Password'} />
    </BackgroundImage>
  );
};
const styles = StyleSheet.create({
  Text: {
    color: Colors.White,
    fontFamily: Font.Work700,
    fontSize: s(20),
  },
  continue: {
    color: Colors.White,
    fontFamily: Font.Work300Italic,
    fontSize: s(15),
  },
  second_container: {
    backgroundColor: Colors.Non,
  },
  Password: {
    fontSize: s(16),
    color: Colors.White,
    fontFamily: Font.Work500,
    paddingHorizontal: ms(5),
  },
  line: {
    height: vs(2),
    backgroundColor: Colors.White,
    width: '44%',
    borderRadius: 10,
  },
  Image: {
    width: s(40),
    height: s(40),
    resizeMode: 'contain',
  },
  No_Account: {
    fontSize: s(15),
    fontFamily: Font.Work500,
    color: Colors.White,
    marginTop: vs(15),
  },
  SignUp: {
    paddingLeft: ms(7),
    textDecorationLine: 'underline',
  },
});

export default Login;
