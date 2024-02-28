import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import {useForm} from 'react-hook-form';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import Loading from '../../../components/Lotties/Loading';
import ImagePickerModal from '../../../components/Modals/ImagePickerModal';
import {useSelector} from 'react-redux';
import {EmailRegix, NameRegix} from '../../../utils/url';
import CustomInput from '../../../components/Inputs/CustomInput';
import Validation from '../../../components/Validation';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Zocial from 'react-native-vector-icons/Zocial';
import {Font} from '../../../utils/font';
import CustomButton from '../../../components/CustomButton';
import {useImagePicker} from '../../../hooks';

const UserProfile = ({navigation}) => {
  const userDetails = useSelector(state => state.userDetails);

  const [edit, setEdit] = useState(false);
  const [isDpViewVisible, setIsDpViewVisible] = useState(false);
  const [load, setLoad] = useState(false);

  const onSubmit = () => {
    console.log('isDpViewVisible', isDpViewVisible);
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  };

  const {cameraLaunch, galleryLaunch, image, picker, setPicker} =
    useImagePicker();

  const ImagePress = () => {
    if (edit) {
      setPicker(true);
    } else {
      setIsDpViewVisible(true);
    }
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({mode: 'all'});

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <Header
        edit
        Title={edit ? 'Edit Profile' : 'Profile'}
        editText={edit ? 'Cancel' : 'Edit'}
        editOnPress={() => {
          setEdit(!edit);
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.Padding}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.DpBox}
            onPress={ImagePress}>
            {/* {userDetails?.image && saveImage == null || undefined ? (
            <Image
              resizeMode="cover"
              style={GlobalStyle.Image}
              source={require('../../../assets/image/selectimage.png')}
            />
          ) : (
            <Image
              resizeMode="cover"
              style={GlobalStyle.Image}
              source={
                saveImage ? {uri: saveImage.uri} : {uri: userDetails?.image}
              }
            />
          )} */}
            <Image
              resizeMode="cover"
              style={GlobalStyle.Image}
              source={
                image
                  ? {uri: image.uri}
                  : require('../../../assets/image/selectimage.png')
              }
            />
          </TouchableOpacity>
          <View style={GlobalStyle.Vertical_Space} />
          <View style={GlobalStyle.Row}>
            <FontAwesome5
              name="user-alt"
              size={scale(20)}
              color={Colors.White}
            />
            {edit ? (
              <CustomInput
                Container={styles.CustomInputRestyle}
                control={control}
                keyboardType="default"
                name="name"
                placeholder="Enter Your Name"
                // defaultValue={userDetails.name}
                // value={userDetails.name}
                rules={{
                  required: 'User Name is required',
                  pattern: {
                    value: NameRegix,
                    message: 'Enter a User Name',
                  },
                }}
              />
            ) : (
              <View style={styles.TextBox}>
                <Text style={styles.Text}>{`Emma watson`}</Text>
              </View>
            )}
          </View>
          {edit && errors.name && (
            <Validation
              restyle={styles.ValidationRestyle}
              title={errors.name.message}
            />
          )}
          <View style={GlobalStyle.Row}>
            <Zocial name="email" size={scale(20)} color={Colors.White} />
            {edit ? (
              <CustomInput
                Container={styles.CustomInputRestyle}
                control={control}
                keyboardType="email-address"
                name="email"
                placeholder="Enter Your Email"
                // defaultValue={userDetails.name}
                // value={userDetails.name}
                rules={{
                  required: '*Email is required',
                  pattern: {
                    value: EmailRegix,
                    message: 'Email is not valid',
                  },
                }}
              />
            ) : (
              <View style={styles.TextBox}>
                <Text style={styles.Text}>{`user@gmail.com`}</Text>
              </View>
            )}
          </View>
          {edit && errors.email && (
            <Validation
              restyle={styles.ValidationRestyle}
              title={errors.email.message}
            />
          )}
          <View style={GlobalStyle.Row}>
            <FontAwesome5
              name="phone-alt"
              size={scale(20)}
              color={Colors.White}
            />

            {edit ? (
              <CustomInput
                Container={styles.CustomInputRestyle}
                control={control}
                keyboardType="number-pad"
                name="phone"
                placeholder="Enter Phone Number"
                // defaultValue={userDetails.name}
                // value={userDetails.name}
                rules={{
                  required: '*Phone Number is required',
                  minLength: {
                    value: 10,
                    message: '*Phone Number is not valid',
                  },
                  maxLength: {
                    value: 16,
                    message: '*Phone Number is not valid',
                  },
                }}
              />
            ) : (
              <View style={styles.TextBox}>
                <Text style={styles.Text}>{`032231237678`}</Text>
              </View>
            )}
          </View>
          {edit && errors.phone && (
            <Validation
              restyle={styles.ValidationRestyle}
              title={errors.phone.message}
            />
          )}
          {edit && (
            <CustomButton
              onPress={handleSubmit(onSubmit)}
              title="Save Changes"
              containerStyle={{
                marginTop: verticalScale(40),
                width: '90%',
              }}
            />
          )}
          <View style={GlobalStyle.Height} />
        </View>
      </ScrollView>
      <Loading isVisible={load} />
      <ImagePickerModal
        isVisible={picker}
        onClose={() => setPicker(false)}
        PressCamera={cameraLaunch}
        PressPicture={galleryLaunch}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  DpBox: {
    width: scale(110),
    height: scale(110),
    backgroundColor: Colors.White,
    borderRadius: scale(100),
    alignSelf: 'center',
    overflow: 'hidden',
  },
  CustomInputRestyle: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: Colors.White,
    borderRadius: 0,
    width: '85%',
    marginLeft: scale(15),
    paddingHorizontal: 0,
    marginTop: verticalScale(8),
  },
  Text: {
    color: Colors.White,
    fontFamily: Font.Work500,
    fontSize: scale(16),
  },
  TextBox: {
    marginTop: verticalScale(25),
    paddingHorizontal: moderateScale(10),
    height: verticalScale(45),
    borderWidth: scale(1),
  },
  ValidationRestyle: {
    marginLeft: scale(40),
    marginTop: verticalScale(7),
    marginBottom: verticalScale(-10),
  },
});
export default UserProfile;
