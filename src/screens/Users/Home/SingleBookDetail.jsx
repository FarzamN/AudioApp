import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Pressable,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import Header from '../../../components/Header/Header';
import {s, scale, vs} from 'react-native-size-matters';
import {Colors} from '../../../utils/Colors';
import {Font} from '../../../utils/font';

const {width, height} = Dimensions.get('screen');
const SingleBookDetail = ({navigation, route}) => {
  const {item} = route.params;

  return (
    <View
      style={[GlobalStyle.Trans_Container, {backgroundColor: Colors.Black}]}>
      <Header Back language />
      <View style={styles.Image}>
        <Image style={GlobalStyle.Image} source={{uri: item.image}} />
      </View>
      <Pressable
        android_ripple={GlobalStyle.Yellow_Ripple}
        style={[styles.SampleBox, GlobalStyle.Row]}>
        <Entypo name="controller-play" color={Colors.White} size={20} />
        <Text style={[styles.book, {fontSize: scale(13)}]}>Sample</Text>
      </Pressable>
      <Text style={[GlobalStyle.TextShadow, styles.category]}>
        {item.book_name}
      </Text>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>audio book</Text>
        <View style={styles.dot} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>{item.author}</Text>
      </View>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>★★★★</Text>
        <View style={{width: '5%'}} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>200 ratings</Text>
      </View>
      <View style={[GlobalStyle.Row, styles.CenterTextView]}>
        <Text style={[GlobalStyle.TextShadow, styles.book]}>
          by {`\n`} {item.author}
        </Text>
        <View style={{width: '20%'}} />
        <Text style={[GlobalStyle.TextShadow, styles.book]}>
          Narrated ratings {`\n`}
          {item.title}
        </Text>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    borderRadius: width,
    width: s(4),
    aspectRatio: 1 / 1,
    backgroundColor: Colors.White,
    marginHorizontal: s(10),
  },
  Image: {
    width: width / 1.3,
    height: height / 3.5,
    resizeMode: 'cover',
    borderRadius: s(15),
    alignSelf: 'center',
    marginTop: s(10),
    overflow: 'hidden',
  },
  category: {
    color: Colors.White,
    textTransform: 'capitalize',
    margin: s(20),
    fontFamily: Font.Work600,
    fontSize: s(20),
    textAlign: 'center',
  },
  book: {
    color: Colors.White,
    fontSize: s(15),
    fontFamily: Font.Work500,
    textAlign: 'center',
  },
  CenterTextView: {alignSelf: 'center', marginBottom: vs(10)},
  SampleBox: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: Colors.White,
    alignSelf: 'center',
    marginTop: vs(10),
    overflow: 'hidden',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
export default SingleBookDetail;
