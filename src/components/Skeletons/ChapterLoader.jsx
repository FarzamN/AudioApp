import React from 'react';
import {scale, verticalScale} from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {Colors} from '../../utils/Colors';

const ChapterLoader = () => {
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
          height={verticalScale(50)}
          marginLeft={'5%'}
          marginTop={10}
          borderRadius={5}
          alignSelf="center"
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ChapterLoader;
