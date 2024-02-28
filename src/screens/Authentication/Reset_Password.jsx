import {StyleSheet, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleText from '../../components/Header/DoubleText';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {useForm} from 'react-hook-form';
import RegisterInput from '../../components/Inputs/RegisterInput';
import Validation from '../../components/Validation';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Lotties/Error';
import {EmailRegix} from '../../utils/url';

const Reset_Password = ({navigation}) => {
  const [errorModal, setErrorModal] = useState(false);

  const onSubmit = data => {
    if (data.email == 'user@gmail.com') {
      navigation.navigate('forget');
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
      source={require('../../assets/image/Backgrounds/reset.jpg')}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DoubleText
          first="Did you forget your password?"
          second="feel free to reset"
        />
        <View style={GlobalStyle.Vertical_Space} />
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
        <View style={GlobalStyle.Vertical_Space} />
        <View style={GlobalStyle.Vertical_Space} />
        <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
      <Error isVisible={errorModal} message={'Can not find any Email'} />
    </BackgroundImage>
  );
};

export default Reset_Password;

const styles = StyleSheet.create({});
