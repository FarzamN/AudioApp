import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {ms, mvs, s, vs} from 'react-native-size-matters';
import {Colors} from '../../utils/Colors';
import {Font} from '../../utils/font';
import CustomButton from '../CustomButton';
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('screen');
const SubscriptionCard = ({data}) => {
  const navigation = useNavigation()
  return (
    <>
      <View style={styles.MainContainer}>
        <View style={styles.Container}>
          {data.popular && (
            <View style={styles.PopularBox}>
              <Text style={styles.time}>Most Popular</Text>
            </View>
          )}
          <Text style={styles.time}>{data.time}</Text>
          <Text style={styles.price}>$5</Text>
          <Text style={styles.time}>Books that make you great</Text>
          <Text style={styles.Monthly}>Monthly</Text>
          <Text style={[styles.desc, {color: Colors.Black}]}>
            World class book for your personal growth
          </Text>
          <CustomButton title={'Continue'} containerStyle={styles.BtnRestyle} onPress={() => navigation.navigate('login')} />
        </View>
      </View>
      <View>
        <View style={styles.descBox}>
          <Text style={styles.desc}>
            World class book for your personal growth
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  PopularBox: {
    height: vs(30),
    alignSelf: 'center',
    borderRadius: s(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: vs(15),
    paddingHorizontal: ms(25),
    backgroundColor: Colors.Yellow,
  },
  MainContainer: {
    width: width,
  },
  descBox: {
    width: width / 1.4,
    backgroundColor: Colors.White,
    marginTop: vs(20),
    padding: ms(10),
    borderRadius: s(10),
  },
  Container: {
    width: width / 1.4,
    borderRadius: s(20),
    backgroundColor: Colors.White,
    alignItems: 'center',
    paddingVertical: mvs(20),
  },
  price: {
    fontFamily: Font.Work700,
    color: Colors.Black,
    fontSize: s(50),
  },
  time: {
    fontFamily: Font.Work700,
    color: Colors.Black,
  },
  Monthly: {
    fontFamily: Font.Work700,
    color: Colors.Black,
  },

  BtnRestyle: {
    width: `85%`,
    height: vs(45),
    marginTop: vs(30),
  },
  desc: {
    color: Colors.Black,
    fontFamily: Font.Work600,
    fontSize: s(17),
    textAlign: 'center',
  },
});
export default SubscriptionCard;
