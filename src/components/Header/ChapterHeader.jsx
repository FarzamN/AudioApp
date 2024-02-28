import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Colors';
import {ms, s} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import {useNavigation} from '@react-navigation/native';

const ChapterHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={[GlobalStyle.Row, styles.container]}>
      <Pressable
        android_ripple={GlobalStyle.Yellow_Ripple}
        onPress={() => navigation.goBack()}>
        <Ionicons name="close" color={Colors.White} size={s(20)} />
      </Pressable>
      <Text style={styles.Text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Text: {
    fontSize: s(16),
    color: Colors.White,
    marginHorizontal: s(15),
    fontFamily: Font.Work600,
  },
  container: {
    padding: ms(15),
  },
});
export default ChapterHeader;
