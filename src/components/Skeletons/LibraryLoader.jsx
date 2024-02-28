import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../utils/Colors';
import {Dimensions} from 'react-native';

const LibraryLoader = () => {
  return (
    <SkeletonPlaceholder
      speed={2400}
      borderRadius={scale(20)}
      highlightColor={Colors.Sky}
      shimmerWidth={500}
      angle={100}
      backgroundColor={Colors.GreyBlue}>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item
          width={'90%'}
          height={verticalScale(70)}
          marginLeft={scale(20)}
          marginRight={0}
          marginTop={verticalScale(15)}
          borderRadius={10}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default LibraryLoader;
