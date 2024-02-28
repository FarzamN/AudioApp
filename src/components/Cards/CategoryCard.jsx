import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  ImageBackground,
  Pressable,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {tab} from '../../Constants/Responsive';
import { Font } from '../../utils/font';
import { useButtonAnimation } from '../../hooks';

const {height} = Dimensions.get('screen');
const CategoryCard = ({data, onPress}) => {
  const { isPressed, scaleValue, handlePressIn, handlePressOut } =
    useButtonAnimation();
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.Container,
        {
          width: tab ? '31%' : '47%',
          transform: [{scale: isPressed ? 0.95 : scaleValue.__getValue()}],
          opacity: isPressed ? 0.6 : 1
        },
      ]}>
      <ImageBackground
        style={[GlobalStyle.Image, styles.ImageBackground]}
        source={{uri: data.image}}>
        <Text style={[GlobalStyle.TextShadow, styles.title]}>{data.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    height: height / 8,
    borderRadius: scale(10),
    overflow: 'hidden',
    margin: scale(5),
  },
  ImageBackground: {
    justifyContent: 'flex-end',
  },
  title: {
    color: Colors.White,
    textTransform: 'capitalize',
    margin: scale(5),
    fontFamily:Font.Work500
    ,fontSize:scale(15)
  },
});

export default CategoryCard;
