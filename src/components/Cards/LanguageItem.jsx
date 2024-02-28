import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import Fontisto from 'react-native-vector-icons/Fontisto';
const LanguageItem = ({data, focus, onPress}) => {
  return (
    <Pressable
      style={[GlobalStyle.Space_Between, styles.Container]}
      android_ripple={GlobalStyle.Yellow_Ripple}
      onPress={onPress}>
      <Text style={[styles.Text,{color: focus ? Colors.Yellow : Colors.White}]}>{data.title}</Text>
      <Fontisto
        name={focus ? 'radio-btn-active' : 'radio-btn-passive'}
        color={focus ? Colors.Yellow : Colors.White}
        size={scale(20)}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: verticalScale(50),
    paddingHorizontal: moderateScale(15),
    overflow: 'hidden',
  },
  Text: {
    fontFamily: Font.Work600,
    fontSize: scale(16),
    textTransform: 'capitalize',
  },
});
export default LanguageItem;
