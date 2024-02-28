// >
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React, {useRef, useState} from 'react';
import {Font} from '../../utils/font';
import {s} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import SubscriptionCard from '../../components/Cards/SubscriptionCard';
import Swiper from 'react-native-swiper';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {SubscriptionData} from '../../Constants/Data';
import FastImage from 'react-native-fast-image';

const Subscription = () => {
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <ImageBackground
      style={styles.Image_Container}
      blurRadius={4}
      source={require('../../assets/image/Backgrounds/subs.jpg')}>
      <FastImage
        source={require('../../assets/image/Backgrounds/subs.jpg')}
        style={styles.Image_Container}
      />
      <View style={styles.overlay}>
        <View style={{height: '10%'}} />
        <View style={styles.TextBox}>
          <Text style={styles.Heading}>
            Get access to all the Books in lowest price possible in market
          </Text>
          <View style={{height: '10%'}} />
          <Text
            style={[
              styles.Heading,
              {fontSize: s(15), fontFamily: Font.Work600Italic},
            ]}>
            Take the first step for your improvement
          </Text>
        </View>
        <View style={{marginLeft: s(20)}}>
          <Carousel
            layout={'stack'}
            ref={carouselRef}
            data={SubscriptionData}
            sliderWidth={400}
            itemWidth={300}
            onSnapToItem={index => setActiveSlide(index)}
            renderItem={({item}) => (
              <SubscriptionCard data={item} key={item.id} />
            )}
          />
        </View>
        <Pagination
          dotsLength={SubscriptionData?.length}
          activeDotIndex={activeSlide}
          dotStyle={styles.DotStyle}
          inactiveDotOpacity={0.3}
          inactiveDotScale={0.5}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  Heading: {
    fontFamily: Font.Work600,
    fontSize: s(18),
    color: Colors.White,
    textAlign: 'center',
  },
  TextBox: {
    maxWidth: '90%',
    alignSelf: 'center',
  },
  Image_Container: {
    flex: 1,
    resizeMode: 'cover',
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
  },
  DotStyle: {
    width: s(12),
    height: s(12),
    borderRadius: s(10),
    marginHorizontal: s(10),
    backgroundColor: Colors.Yellow,
  },
});

export default Subscription;
