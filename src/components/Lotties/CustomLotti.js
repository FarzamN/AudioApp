import { Text, SafeAreaView } from 'react-native';
import React from 'react';

import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { GlobalStyle } from '../../Constants/GlobalStyle';
import { Colors } from '../../utils/Colors';

const CustomLotti = ({
  isVisible,
  Title,
  source,
  TextRestyle,
}) => {
  return (
    <Modal
      visible={isVisible}
      statusBarTranslucent
      style={[GlobalStyle.MainModal, { backgroundColor: 'rgba(0,0,0,0.8)' }]}>
      <SafeAreaView style={[GlobalStyle.ModalContainer, { backgroundColor: Colors.Main }]}>
        <LottieView autoPlay style={GlobalStyle.LottieView} source={source} />
        <Text style={[GlobalStyle.ModalText, TextRestyle,{color:Colors.White}]}>{Title}</Text>

      </SafeAreaView>
    </Modal>
  );
};
export default CustomLotti;
