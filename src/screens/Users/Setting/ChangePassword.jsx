import {View, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import DoubleText from '../../../components/Header/DoubleText';
import BackgroundImage from '../../../components/BackgroundImage';
import {useForm} from 'react-hook-form';
import Validation from '../../../components/Validation';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import CustomButton from '../../../components/CustomButton';
import RegisterInput from '../../../components/Inputs/RegisterInput';
import Error from '../../../components/Lotties/Error';
import Header from '../../../components/Header/Header';
import {Colors} from '../../../utils/Colors';

const ChangePassword = ({navigation}) => {
  const [errorModal, setErrorModal] = useState(false);

  const onSubmit = data => {
    if (data.password == data.c_password) {
      navigation.goBack();
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
    <SafeAreaView style={GlobalStyle.Container}>
      <Header Back Title="Change Your Password" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.Padding}>
          <RegisterInput
            password
            label="Old Password"
            name="old_password"
            rules={{
              required: '*Old Password is required',
              minLength: {
                value: 8,
                message: '*Old Password too short (minimum length is 8)',
              },
              maxLength: {
                value: 16,
                message: '*Old Password too long (maximum length is 16)',
              },
            }}
            control={control}
            placeholder="Old Password"
          />
          {errors.old_password && (
            <Validation title={errors.old_password.message} />
          )}

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
          {errors.c_password && (
            <Validation title={errors.c_password.message} />
          )}
          <View style={GlobalStyle.Vertical_Space} />
          <View style={GlobalStyle.Vertical_Space} />
          <CustomButton title="Continue" onPress={handleSubmit(onSubmit)} />
        </View>
      </ScrollView>
      <Error isVisible={errorModal} message={'Password is not matched'} />
    </SafeAreaView>
  );
};

export default ChangePassword;
