import {Text, StyleSheet} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {Font} from '../utils/font';

const Validation = ({title,restyle}) => {
  return <Text style={[styles.error,restyle]}>{title}</Text>;
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: scale(14),
    fontFamily: Font.Work500,
  },
});

export default Validation;
