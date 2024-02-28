import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';

import {GlobalStyle} from '../../Constants/GlobalStyle';
import {s} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import {useButtonAnimation} from '../../hooks';

const {width, height} = Dimensions.get('screen');
const DetailBookCard = ({data, onPress}) => {
  const {isPressed, scaleValue, handlePressIn, handlePressOut} =
    useButtonAnimation();
  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        styles.Container,
        {
          transform: [{scale: isPressed ? 0.95 : scaleValue.__getValue()}],
          opacity: isPressed ? 0.6 : 1,
        },
      ]}>
      <View style={styles.Image}>
        <Image
          resizeMode="cover"
          source={{uri: data.image}}
          style={GlobalStyle.Image}
        />
      </View>
      <View style={{marginHorizontal: 5}}>
        <Text
          numberOfLines={2}
          style={[GlobalStyle.TextShadow, styles.book_name]}>
          {data.book_name}
        </Text>
        <Text style={[GlobalStyle.TextShadow, styles.author]}>
          by {data.author}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: width / 1.6,
    height: height / 4.5,
    borderRadius: s(12),
    overflow: 'hidden',
  },
  Container: {
    marginLeft: s(15),
    width: width / 1.6,
  },
  book_name: {
    fontFamily: Font.Work600,
    fontSize: s(16),
    color: Colors.White,
    maxWidth: '99%',
  },
  author: {
    fontFamily: Font.Work500,
    fontSize: s(14.5),
    color: Colors.Grey,
  },
});
export default DetailBookCard;
