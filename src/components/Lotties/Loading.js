import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import { GlobalStyle } from '../../Constants/GlobalStyle';

const Loading = ({ isVisible }) => {
  return (
    <Modal
    isVisible={isVisible}
    statusBarTranslucent
      style={[GlobalStyle.MainModal, GlobalStyle.Modal_Container]}>
      <SafeAreaView style={GlobalStyle.ModalContainer}>
        <LottieView
          autoPlay
          style={GlobalStyle.LottieView}
          source={require('../../assets/lottie/loader.json')}
        />
        <Text style={GlobalStyle.ModalText}>Please Wait...</Text>
      </SafeAreaView>
    </Modal>
  );
};

export default Loading;
