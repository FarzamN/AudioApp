import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import {useNavigation} from '@react-navigation/native';
import {GlobalStyle} from '../../Constants/GlobalStyle';

const color = Colors.White
const Header = props => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.Container, props.Container, GlobalStyle.Space_Between]}>
      <View style={GlobalStyle.Row}>
        {props.Logo && <Image style={styles.Image} source={props.source} />}
        {props.Back && (
          <Pressable
            android_ripple={GlobalStyle.Yellow_Ripple}
            onPress={() => navigation.goBack()}
            style={styles.arrowBox}>
            <Ionicons name="arrow-back" color={color} size={scale(18)} />
          </Pressable>
        )}
        <Text style={[GlobalStyle.TextShadow, styles.Text, props.TextRestyle]}>
          {props.Title}
        </Text>
      </View>

      <View style={GlobalStyle.Row}>
        {props.search && (
          <TouchableOpacity style={{marginHorizontal:7}} onPress={() => navigation.navigate('SearchScreen')}>
            <Feather name="search" size={20} color={color} />
          </TouchableOpacity>
        )}
        {props.setting && (
          <TouchableOpacity  onPress={() => navigation.navigate('setting')}>
            <Ionicons name="settings-sharp" size={20} color={color} />
          </TouchableOpacity>
        )}
      </View>
      {props.edit && (
        <TouchableOpacity onPress={props.editOnPress} activeOpacity={0.6}>
          <Text style={styles.editText}>{props.editText}</Text>
        </TouchableOpacity>
      )}
      {props.language && (
        <TouchableOpacity style={styles.LanguageBox} onPress={() => navigation.navigate('language')} activeOpacity={0.6}>
          <Text style={styles.LanguageText}>Language</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    paddingVertical: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(16),
  },
  arrowBox: {
    borderRadius: 6,
    paddingHorizontal: 2,
    paddingVertical: 2,
    marginRight: 10,
    overflow: 'hidden',
  },
  Text: {
    fontFamily: Font.Work600,
    fontSize: scale(17),
    paddingRight: moderateScale(15),
    color,
    textAlignVertical: 'center',
    textTransform: 'capitalize',
  },
  Image: {
    width: scale(22),
    height: scale(22),
    resizeMode: 'contain',
  },
  editText: {
    color,
    fontSize: scale(12),
    fontFamily: Font.Poppins500,
  },
  LanguageText: {
    color:Colors.Black,
    fontSize: scale(13),
    fontFamily: Font.Poppins500,
  },
  LanguageBox:{
    paddingVertical:4,
    paddingHorizontal:10,
    backgroundColor:color,
  }
});

export default Header;
