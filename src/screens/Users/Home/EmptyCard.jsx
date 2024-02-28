import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {scale, verticalScale} from 'react-native-size-matters';

import {Colors} from '../../../utils/Colors';

const EmptyCard = ({textRestyle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.ImageBox}>
        <FastImage
          style={styles.Image}
          source={require('..//../../utils/images/empty.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <Text style={[{color: Colors.White, fontSize: scale(22)}, textRestyle]}>
        Nothing to Show
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width: '100%',
    height: '100%',
  },
  ImageBox: {
    width: scale(200),
    height: scale(200),
    marginVertical: verticalScale(10),
  },
});
export default EmptyCard;
