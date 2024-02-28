import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {s, vs, ms} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CheckButton = ({onPress, data, focus}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
      {focus ? (
        <AntDesign name="checkcircle" color={Colors.White} size={s(18)} />
      ) : (
        <FontAwesome name="circle" color={Colors.White} size={s(20)} />
      )}
      <Text style={styles.Heading}>{data.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Heading: {
    textAlign: 'center',
    color: Colors.White,
    fontSize: s(16),
    fontFamily: Font.Work500,
    marginHorizontal: ms(5),
  },
  row: {
    marginVertical: vs(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(5),
  },
});

export default CheckButton;
