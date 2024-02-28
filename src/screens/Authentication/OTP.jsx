import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import DoubleText from '../../components/Header/DoubleText';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../components/CustomButton';
import Error from '../../components/Lotties/Error';
import Loading from '../../components/Lotties/Loading';
import {Font} from '../../utils/font';
import {Colors} from '../../utils/Colors';
import {s, vs} from 'react-native-size-matters';
import CustomLotti from '../../components/Lotties/CustomLotti';
const OTP = ({navigation}) => {
  const [time, setTime] = useState(100);
  const [loading, setLoading] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [otpResent, setOtpResent] = useState(false);

  useEffect(() => {
    const timer = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const WaitOTP = () => {
    setOtpResent(true);
    setTimeout(() => {
      setOtpResent(false);
    }, 2300);
  };
  const {height} = Dimensions.get('screen');

  const [value, setValue] = useState();
  const CELL_COUNT = 4;

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const otp = 1234;
  const onSubmit = () => {
    if (value == otp) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('subscription');
      }, 2000);
    } else {
      setErrorModal(true);
      setTimeout(() => {
        setErrorModal(false);
      }, 2000);
    }
  };
  const ResendOTP = () => {
    // if (type == 'forgot') {
    //   dispatch(verify_email_before_password(data, resendType, setTime));
    // } else if (type == 'signup') {
    //   dispatch(verify_email_before_registration(data, resendType, setTime));
    // }
    console.log('resend');
  };
  return (
    <BackgroundImage source={require('../../assets/image/Backgrounds/otp.jpg')}>
      <DoubleText
        first="Otp has send"
        second="Check your email for otp (1234)"
      />
      <View style={{height: '5%'}} />
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View key={index} style={styles.CellBox}>
            <Text
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={{height: '5%'}} />
      <CustomButton title="Verify and proceed" onPress={onSubmit} />
      <View style={{height: height * 0.4}} />
      <CustomButton
        onPress={time == 0 ? ResendOTP : WaitOTP}
        containerStyle={styles.OptBox}
        textRestyle={{fontSize: s(14)}}
        title={
          time == 0
            ? 'Press to Resend Your OPT'
            : `You can Reset Your OTP in ${time}`
        }
      />
      <CustomLotti
        isVisible={otpResent}
        source={require('../../assets/lottie/otp.json')}
        Title="Your OPT has already been send"
      />
      <Error isVisible={errorModal} message={'Please check your otp'} />
      <Loading isVisible={loading} />
    </BackgroundImage>
  );
};

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: s(10),
  },
  cell: {
    fontSize: s(20),
    fontFamily: Font.Work500,
    color: Colors.White,
  },
  CellBox: {
    elevation: 1,
    borderRadius: s(10),
    borderWidth: s(1),
    borderColor: Colors.Yellow,
    width: s(60),
    height: s(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  OptBox: {
    width: '80%',
    height: vs(40),
  },
});
export default OTP;
