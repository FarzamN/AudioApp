import {StyleSheet, ImageBackground, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
const BackgroundImage = ({children, source}) => {
  return (
    <ImageBackground
      style={styles.Image_Container}
      blurRadius={4}
      source={source}>
      <FastImage source={source} style={styles.Image_Container} />
      <View style={styles.overlay}>{children}</View>
    </ImageBackground>
  );
};

export default BackgroundImage;

const styles = StyleSheet.create({
  Image_Container: {
    flex: 1,
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    paddingHorizontal: moderateScale(20),
  },
});
