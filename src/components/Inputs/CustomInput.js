import React, {forwardRef, useState} from 'react';
import {useController} from 'react-hook-form';
import {StyleSheet, TextInput, View, Pressable} from 'react-native';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {GlobalStyle} from '../../Constants/GlobalStyle';

const CustomInput = forwardRef((props, ref) => {
  const [password, setPassword] = useState(true);

  const {field} = useController({
    control: props.control,
    defaultValue: props.defaultValue || '',
    name: props.name,
    rules: props.rules,
  });
  return (
    <View style={[styles.Container,props.Container]}>
      <TextInput
        onFocus={props.onFocus}
        value={field.value}
        ref={ref}
        onChangeText={field.onChange}
        multiline={props.multiline}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.placeholderTextColor}
        style={[styles.InputStyles, props.restyle]}
        keyboardType={props.keyboardType}
        secureTextEntry={props.password ? password : false}
        pattern={props.pattern}
        label={props.label}
        placeholderStyle={props.placeholderStyle}
        maxLength={props.maxLength}
        cursorColor={Colors.Yellow}
        selectionColor="rgba(236, 179, 101, 0.6)"
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
  );
});

const styles = StyleSheet.create({
  InputStyles: {
    width: '85%',
    height: '100%',
    color: Colors.White,
    fontFamily: Font.Work500,
    fontSize: scale(16),
  },
  Container: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: verticalScale(20),
    width: '100%',
    paddingHorizontal: moderateScale(20),
    height: verticalScale(50),
    backgroundColor: Colors.Non,
    borderWidth: scale(1),
    borderColor: Colors.White,
    borderRadius: scale(10),
  },
});
export default CustomInput;
