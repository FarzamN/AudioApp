import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Dimensions,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {ms, s} from 'react-native-size-matters';
import * as Progress from 'react-native-progress';
import {Colors} from '../../utils/Colors';
import { useButtonAnimation } from '../../hooks';


const {width} = Dimensions.get('screen');
const LibraryCard = ({data, onPress}) => {
  const {isPressed, scaleValue, handlePressIn, handlePressOut} =
  useButtonAnimation();

  return (
    <Pressable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        GlobalStyle.Row,
        styles.containerStyle,
        {
          transform: [{scale: isPressed ? 0.95 : scaleValue.__getValue()}],
          opacity: isPressed ? 0.6 : 1,
        },
      ]}>
      <View style={styles.ImageBox}>
        <Image source={{uri: data.image}} style={GlobalStyle.Image} />
      </View>
      <View style={styles.TextView}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.subs}>by {data.artist}</Text>
      <Text style={styles.subs}>Narrated by {data.artist}</Text>
        <View style={GlobalStyle.Row}>
          <Progress.Bar
            progress={data.progress}
            width={width / 7}
            style={{marginRight: s(5)}}
            color={Colors.Yellow}
          />
          <Text style={styles.subs}>{data.timing} left</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: s(12),
    margin:s(10),
    width:'100%'
  },
  ImageBox: {
    height: s(75),
    width: s(75),
    borderRadius: s(10),
    overflow: 'hidden',
  },
  title:{
    fontSize:s(15),
    color:Colors.White
},
subs:{
    fontSize:s(11),
    color:Colors.White
  },
  TextView:{
    paddingHorizontal:ms(10)
  }
});
export default LibraryCard;
