import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';

import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const SettingItem = props => {
  return (
    <Pressable
      android_ripple={GlobalStyle.Yellow_Ripple}
      onPress={props.onPress}
      style={styles.Container}>
      <View style={GlobalStyle.Row}>
        {props.password && (
          <MaterialIcons
            name="password"
            size={scale(20)}
            color={Colors.White}
          />
        )}
        {props.delete && (
          <MaterialCommunityIcons
            name="delete-alert"
            size={scale(20)}
            color={Colors.White}
          />
        )}
        {props.Term && (
          <Foundation
            name="page-filled"
            size={scale(20)}
            color={Colors.White}
          />
        )}
        {props.privacy && (
          <FontAwesome6 name="shield" size={scale(20)} color={Colors.White} />
        )}
        <Text style={styles.Text}>{props.Title}</Text>
      </View>
      <View style={GlobalStyle.Row}>
        <View style={styles.Circle}>
          {props.delete ? (
            <MaterialCommunityIcons
              name="alert-remove"
              size={scale(16)}
              color="red"
            />
          ) : (
            <Entypo name="chevron-right" size={scale(18)} color={Colors.Main} />
          )}
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: verticalScale(50),
    paddingHorizontal: moderateScale(15),
    overflow: 'hidden',
  },
  Text: {
    color: Colors.White,
    fontFamily: Font.Work600,
    fontSize: scale(16),
    textTransform: 'capitalize',
    marginLeft: scale(10),
  },
  Circle: {
    backgroundColor: Colors.White,
    height: scale(30),
    width: scale(30),
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(8),
  },
});
export default SettingItem;
