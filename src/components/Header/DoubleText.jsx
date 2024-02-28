import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {GlobalStyle} from '../../Constants/GlobalStyle';

const DoubleText = ({first, second,}) => {
  return (
    <View style={ GlobalStyle.StatusBar}>
      <Text style={styles.first}>{first}</Text>
      <Text style={styles.second}>{second}</Text>
    </View>
  );
};

export default DoubleText;

const styles = StyleSheet.create({
  first: {
    fontSize: s(17),
    fontFamily: Font.Work600,
    color: Colors.White,
    marginTop: vs(10),
  },
  second: {
    fontSize: s(15),
    fontFamily: Font.Work400Italic,
    color: Colors.White,
    marginBottom: vs(5),
  },
});
