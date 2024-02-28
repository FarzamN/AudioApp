import React, {forwardRef, useState} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, View, Text, TextInput, Pressable} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Font} from '../../utils/font';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ResisterInput = forwardRef((props, ref) => {
  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });

  const [password, setPassword] = useState(true);
  return (
    <View style={styles.MainView}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={[styles.Container, GlobalStyle.Row, props.Hello]}>
        {props.user && (
          <AntDesign name="user" color={Colors.White} size={scale(18)} />
        )}
        {props.email && (
          <Fontisto name="email" color={Colors.White} size={scale(18)} />
        )}
        {props.phone && (
          <Ionicons
            name="phone-portrait-outline"
            color={Colors.White}
            size={scale(17)}
          />
        )}
        {props.password && (
          <Feather name="lock" color={Colors.White} size={scale(17)} />
        )}
        <TextInput
          onFocus={props.onFocus}
          value={field.value}
          ref={ref}
          onChangeText={field.onChange}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.placeholderTextColor}
          style={[styles.InputStyles, props.Gapp, props.restyle]}
          keyboardType={props.keyboardType}
          textContentType={props.textContentType}
          pattern={props.pattern}
          label={props.label}
          maxLength={props.maxLength}
          cursorColor={Colors.Yellow}
          selectionColor="rgba(236, 179, 101, 0.6)"
          secureTextEntry={props.password ? password : false}
        />
        {props.password && (
          <Pressable
            android_ripple={GlobalStyle.Yellow_Ripple}
            style={{padding: moderateScale(5)}}
            onPress={() => setPassword(!password)}>
            {password ? (
              <MaterialCommunityIcons
                color={Colors.White}
                size={scale(20)}
                name="eye"
              />
            ) : (
              <Entypo
                color={Colors.White}
                size={scale(20)}
                name="eye-with-line"
              />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
});
const styles = StyleSheet.create({
  InputStyles: {
    color: Colors.White,
    width: '83%',
    paddingHorizontal: moderateScale(10),
    fontFamily: Font.Work500,
  },
  label: {
    fontSize: scale(15),
    color: Colors.White,
    paddingHorizontal: moderateScale(5),
    fontFamily: Font.Work500,
    marginBottom: verticalScale(3),
  },
  Container: {
    height: verticalScale(50),
    borderWidth: scale(1),
    borderRadius: scale(10),
    borderColor: Colors.White,
    paddingHorizontal: moderateScale(13),
  },
  MainView: {
    marginTop: verticalScale(15),
  },
});

export default ResisterInput;
