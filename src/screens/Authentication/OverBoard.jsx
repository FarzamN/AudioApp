import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {GlobalStyle} from '../../Constants/GlobalStyle';
import {Colors} from '../../utils/Colors';
import {mvs, scale} from 'react-native-size-matters';
import {Font} from '../../utils/font';
import CustomButton from '../../components/CustomButton';
import FastImage from 'react-native-fast-image';
import withConnectionModal from '../../Hoc/ConnectionModalHOC';

const {width, height} = Dimensions.get('screen');
const OverBoard = ({navigation}) => {
  return (
    <View style={GlobalStyle.Container}>
      <StatusBar
        translucent
        backgroundColor={Colors.Non}
        barStyle="light-content"
      />
      <View style={styles.Image_Container}>
        <ImageBackground
          resizeMode="contain"
          source={require('../../assets/image/Backgrounds/overboard.jpg')}
          style={styles.Image_Container}>
          <FastImage
            source={require('../../assets/image/Backgrounds/overboard.jpg')}
            style={styles.Image_Container}
          />
          <View style={[styles.overlay, styles.Image_Container]}>
            <View />
            <Text style={styles.text}>The Audio app</Text>

            <View style={styles.Sec_Box}>
              <View style={styles.Image_Box}>
                <Image
                  resizeMode="contain"
                  style={GlobalStyle.Image}
                  source={require('../../assets/image/Logos/logo.jpg')}
                />
              </View>
              <CustomButton
                title="Register"
                containerStyle={GlobalStyle.CustomButtonRestyle}
                textRestyle={GlobalStyle.textRestyle}
                onPress={() => navigation.navigate('register')}
                dark
              />
              <CustomButton
                title="Login"
                onPress={() => navigation.navigate('login')}
                containerStyle={{width: '85%'}}
              />
              <View style={GlobalStyle.Vertical_Space} />
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Image_Container: {flex: 1, justifyContent: 'space-between'},
  text: {
    fontSize: scale(30),
    fontFamily: Font.Work600,
    color: Colors.White,
    textAlign: 'center',
  },
  Sec_Box: {
    backgroundColor: Colors.Black,
    borderTopRightRadius: scale(30),
    borderTopLeftRadius: scale(30),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    paddingTop: mvs(20),
  },
  Image_Box: {
    width: width / 1.2,
    height: height / 5,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
});

export default withConnectionModal(OverBoard);
