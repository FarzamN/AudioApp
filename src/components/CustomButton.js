import React, { useState, useRef } from 'react';
import { StyleSheet, Text, Pressable, Image, Animated } from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { Font } from '../utils/font';
import { Colors } from '../utils/Colors';
import { useButtonAnimation } from '../hooks'
const CustomButton = props => {
  const { isPressed, scaleValue, handlePressIn, handlePressOut } =
    useButtonAnimation();
  return (
    <Pressable
      onPress={props.onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.containerStyle,
        {
          transform: [{ scale: isPressed ? 0.95 : scaleValue.__getValue() }],
          opacity: isPressed ? 0.6 : 1,
        },
        props.containerStyle,
      ]}>
      {props.google && (
        <Image
          style={styles.Image}
          resizeMode="contain"
          source={require('../assets/image/Icons/google.png')}
        />
      )}
      <Text style={[styles.font, props.textRestyle]}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(10),
    marginTop: verticalScale(10),
    alignSelf: 'center',
    height: verticalScale(50),
    backgroundColor: Colors.Yellow,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  containerPressed: {
    transform: [{ scale: 0.9 }],
  },
  font: {
    color: Colors.White,
    fontSize: scale(17),
    textTransform: 'capitalize',
    fontFamily: Font.Work600,
  },
  Image: {
    width: scale(30),
    height: scale(30),
    marginRight: scale(8),
  },
});
