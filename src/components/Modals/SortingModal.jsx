import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {ms, mvs, s} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';

const SortingModal = ({onClose, visible, children}) => {
  return (
    <ReactNativeModal
      testID={'modal'}
      backdropOpacity={0}
      onBackdropPress={onClose}
      isVisible={visible}
      onBackButtonPress={onClose}
      animationIn={'fadeIn'}
      animationOut={'fadeOut'}>
      <View style={styles.Container}>{children}</View>
    </ReactNativeModal>
  );
};

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    right: 0,
    top: '7%',
    width: '45%',
    paddingVertical: mvs(10),
    borderRadius: s(10),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    backgroundColor: Colors.White,
    zIndex: 99,
  },
});
export default SortingModal;
