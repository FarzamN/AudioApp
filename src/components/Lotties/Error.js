import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { Colors } from '../../utils/Colors';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const Error = ({ message, isVisible }) => {
  return (
    <Modal
      isVisible={isVisible}
      statusBarTranslucent
      style={[GlobalStyle.MainModal, GlobalStyle.Modal_Container]}>
      <SafeAreaView style={GlobalStyle.ModalContainer}>
        <LottieView
          autoPlay
          style={GlobalStyle.LottieView}
          source={require('../../assets/lottie/error.json')}
        />
        <Text style={[GlobalStyle.ModalText, { color: Colors.Red }]}>
          {message}
        </Text>
      </SafeAreaView>
    </Modal>
  );
};
export default Error;
