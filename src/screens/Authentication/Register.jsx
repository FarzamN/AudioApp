import {StyleSheet, View, ScrollView, Text} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleText from '../../components/Header/DoubleText.jsx';

import RegisterInput from '../../components/Inputs/RegisterInput';
import {EmailRegix, NameRegix} from '../../utils/url';
import Validation from '../../components/Validation';
import {useForm} from 'react-hook-form';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Lotties/Error';
import Loading from '../../components/Lotties/Loading';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import {ms, s, vs} from 'react-native-size-matters';
const Register = ({navigation, route}) => {
  // const {type} = route.params
  const [errorModal, setErrorModal] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = data => {
    if (data.password != data.c_password) {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('otp');
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
      source={require('../../assets/image/Backgrounds/register.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoubleText
          first="Create account"
          second="It's free and easy to set up !"
        />
        <View style={GlobalStyle.Vertical_Space} />
        <RegisterInput
          user
          label="Full Name"
          name="name"
          rules={{
            required: '*Name is required',
            pattern: {
              value: NameRegix,
              message: 'Name is not valid',
            },
          }}
          control={control}
          placeholder="Name"
        />
        {errors.name && <Validation title={errors.name.message} />}
        <RegisterInput
          email
          label="Email"
          name="email"
          rules={{
            required: '*Email is required',
            pattern: {
              value: EmailRegix,
              message: 'Email is not valid',
            },
          }}
          control={control}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        {errors.email && <Validation title={errors.email.message} />}
        <RegisterInput
          phone
          label="Mobile Number"
          name="number"
          rules={{
            required: '*required',
          }}
          control={control}
          placeholder="Phone number"
          keyboardType="number-pad"
          textContentType="telephoneNumber"
        />
        {errors.number && <Validation title={errors.number.message} />}
        <RegisterInput
          password
          label="Password"
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
          placeholder="Password"
        />
        {errors.password && <Validation title={errors.password.message} />}
        <RegisterInput
          password
          label="Confirm Password"
          name="c_password"
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
          placeholder="Password"
        />
        {errors.c_password && <Validation title={errors.c_password.message} />}
        <View style={GlobalStyle.Vertical_Space} />
        <CustomButton title="Sign Up" onPress={handleSubmit(onSubmit)} />
        <View
          style={[
            GlobalStyle.Row,
            {
              alignSelf: 'center',
            },
          ]}>
          <Text style={styles.No_Account}>If you already have an account</Text>
          <Text
            onPress={() => navigation.navigate('register')}
            style={[styles.No_Account, styles.SignUp]}>
            Login
          </Text>
        </View>
      </ScrollView>
      <Error isVisible={errorModal} message={'Password is not matched'} />
      <Error isVisible={isEmailExist} message={'This email already exists'} />
      <Loading isVisible={loading} />
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
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
export default Register;
