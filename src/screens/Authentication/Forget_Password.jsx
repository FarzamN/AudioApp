import {View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleText from '../../components/Header/DoubleText';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {useForm} from 'react-hook-form';
import RegisterInput from '../../components/Inputs/RegisterInput';
import Validation from '../../components/Validation';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Lotties/Error';

const Forget_Password = ({navigation}) => {
  const [errorModal, setErrorModal] = useState(false);

  const onSubmit = data => {
    if (data.password == data.c_password) {
      navigation.navigate('login');
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
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
      source={require('../../assets/image/Backgrounds/forget.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoubleText
          first="Did you forget your password?"
          second="feel free to reset"
        />
        <View style={GlobalStyle.Vertical_Space} />
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
        <View style={GlobalStyle.Vertical_Space} />
        <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
      <Error isVisible={errorModal} message={'Password is not matched'} />
    </BackgroundImage>
  );
};

export default Forget_Password;

