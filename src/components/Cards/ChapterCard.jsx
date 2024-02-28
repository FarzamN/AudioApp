import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {ms, mvs, s} from 'react-native-size-matters';
import {Font} from '../../utils/font';

const ChapterCard = ({data, onPress, focus}) => {
  const {title, time, chap} = data;
  return (
    <Pressable
      android_ripple={styles.Ripple}
      onPress={onPress}
      style={[
        GlobalStyle.Space_Between,
        styles.container,
        {backgroundColor: focus ? Colors.GreyBlue : Colors.Non},
      ]}>
      <View style={{flexDirection: 'row'}}>
        {chap && (
          <Text style={[styles.text, {marginRight: s(10)}]}>{chap}</Text>
        )}
        <Text style={[styles.text, {width: '85%'}]}>{title}</Text>
      </View>
      <Text style={styles.text}>{time}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {color: Colors.White, fontSize: s(15), fontFamily: Font.Work500},
  container: {
    paddingVertical: mvs(13),
    overflow: 'hidden',
    paddingHorizontal: ms(10),
    borderBottomWidth: 1.5,
    borderColor: Colors.GreyBlue,
  },
  Ripple: {
    color: Colors.GreyBlue,
  },
});
export default ChapterCard;
