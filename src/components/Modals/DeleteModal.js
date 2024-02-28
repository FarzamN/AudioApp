import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import CustomButton from '../CustomButton';
import { Font } from '../../utils/font';
import { Colors } from '../../utils/Colors';
const DeleteModal = ({visible,  DeletePress, OnClose, value, points,account}) => {
  return (
    <Modal
    statusBarTranslucent
      isVisible={visible}
      style={GlobalStyle.MainModal}
      onBackButtonPress={OnClose}
      onBackdropPress={OnClose}
      animationIn={'bounce'}
      animationOut={'bounceOut'}>
      <View style={[GlobalStyle.ModalContainer, styles.ModalContainer]}>
        <View style={styles.iconBox}>
          <Ionicons name="warning" color={Colors.Red} size={scale(30)} />
        </View>
        <Text style={styles.Heading}>Delete {value}</Text>
        <Text style={styles.SubHeading}>
          Are you sure you want to delete this Account?
        </Text>
        <View style={[GlobalStyle.Row, {justifyContent: 'space-evenly'}]}>
          <CustomButton
            onPress={OnClose}
            textRestyle={styles.textStyle}
            containerStyle={[
              styles.containerStyle,
              {backgroundColor: 'green'},
            ]}
            title="No, Keep It."
          />
          <CustomButton
            onPress={DeletePress}
            textRestyle={[styles.textStyle, {color: Colors.White}]}
            containerStyle={[
              styles.containerStyle,
              {backgroundColor: Colors.Red},
            ]}
            title="Yes, Delete!"
          />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  iconBox: {
    backgroundColor: 'rgba(153, 0, 0, 0.3)',
    borderRadius: 100,
    padding: moderateScale(5),
    alignSelf: 'center',
    marginBottom: verticalScale(5),
    aspectRatio: 1 / 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    color: Colors.Black,
    fontSize: scale(18),
    textAlign: 'center',
    fontFamily: Font.Work500,
  },
  SubHeading: {
    color: Colors.Black,
    fontSize: scale(14),
    textAlign: 'center',
    fontFamily: Font.Work400,
  },
  ModalContainer: {
    width: '80%',
    padding: 20,
  },
  containerStyle: {
    width: '45%',
    borderWidth: 0,
    height: verticalScale(35),
  },
  textStyle: {
    fontSize: scale(13),
  },
});

export default DeleteModal;
