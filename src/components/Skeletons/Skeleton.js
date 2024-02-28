import React from 'react';
import { scale, verticalScale } from 'react-native-size-matters';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { Colors } from '../../utils/Colors';
import { tab } from '../../Constants/Responsive';
import { Dimensions } from 'react-native';

const Skeleton = ({ ChangeBorderRadius }) => {
  const { width, height } = Dimensions.get('screen');

  return (
    <SkeletonPlaceholder
      speed={2400}
      borderRadius={ChangeBorderRadius ? scale(350) : scale(10)}
      highlightColor={Colors.Sky}
      shimmerWidth={500}
      angle={100}
      backgroundColor={Colors.GreyBlue}>
      <SkeletonPlaceholder.Item marginTop={verticalScale(5)}>
        <SkeletonPlaceholder.Item
          width={tab ? width / 3.2 : width / 2.2}
          height={height / 8}
          marginLeft={scale(8)}
        />
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};
export default Skeleton;
