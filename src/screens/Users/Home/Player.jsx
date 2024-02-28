import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Image,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {Colors} from '../../../utils/Colors';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import {s, vs} from 'react-native-size-matters';
import {Font} from '../../../utils/font';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Slider from '@react-native-community/slider';

const {width, height} = Dimensions.get('screen');
const Player = ({navigation, route}) => {
  const {item} = route.params;
  const [play, setPlay] = useState(false);

  useEffect(() => {
    StatusBar.setTranslucent(true);
    StatusBar.setBackgroundColor(Colors.Non);
    return () => {
      StatusBar.setTranslucent(false);
      StatusBar.setBackgroundColor(Colors.Main);
    };
  }, []);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <View style={GlobalStyle.Trans_Container}>
      <ImageBackground
        style={GlobalStyle.Trans_Container}
        blurRadius={200}
        source={{uri: item.image}}>
        <Header c_back />
        <View style={styles.Image}>
          <Image style={GlobalStyle.Image} source={{uri: item.image}} />
        </View>
        <Text
          numberOfLines={2}
          style={[GlobalStyle.TextShadow, styles.book_name]}>
          {item.title}
        </Text>
        <Text style={[GlobalStyle.TextShadow, styles.book_name]}>
          by • {item.artist}
        </Text>
        <Slider
          style={{width: '100%', marginVertical: vs(20)}}
          // value={currentTime}
          // maximumValue={soundDuration}
          // onValueChange={handleSliderValueChange}
          // onSlidingComplete={handleSliderSlidingComplete}
          minimumTrackTintColor={Colors.White}
          maximumTrackTintColor={Colors.Yellow}
          thumbTintColor={Colors.Main}
        />
        <View
          style={[
            GlobalStyle.Space_Between,
            GlobalStyle.Padding,
            {marginTop: '5%'},
          ]}>
          <Text style={[GlobalStyle.TextShadow, styles.time]}>21:50</Text>
          <Text style={[GlobalStyle.TextShadow, styles.time]}>
            {item.timing}
          </Text>
          <Text style={[GlobalStyle.TextShadow, styles.time]}>-1:0.6:15</Text>
        </View>
        <View style={[GlobalStyle.Space_Between, {marginTop: '10%'}]}>
          <Ionicons name="ios-shuffle" size={s(25)} color={Colors.Non} />
          <TouchableOpacity>
            <FontAwesome5
              name="step-backward"
              size={s(25)}
              color={Colors.White}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playNPause}
            onPress={() => setPlay(!play)}>
            <Ionicons
              name={play ? 'pause' : 'play'}
              color={Colors.Black}
              size={s(25)}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <FontAwesome5
              name="step-forward"
              size={s(25)}
              color={Colors.White}
            />
          </TouchableOpacity>
          <MaterialIcons name="loop" size={s(21)} color={Colors.Non} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: width / 1.3,
    height: height / 3.5,
    resizeMode: 'cover',
    borderRadius: s(15),
    alignSelf: 'center',
    marginTop: s(10),
    overflow: 'hidden',
  },
  book_name: {
    fontFamily: Font.Work600Italic,
    fontSize: s(22),
    color: Colors.White,
    textAlign: 'center',
    marginTop: vs(10),
    maxWidth: '85%',
    alignSelf: 'center',
  },
  time: {
    fontFamily: Font.Work500,
    fontSize: s(12),
    color: Colors.White,
  },
  playNPause: {
    backgroundColor: Colors.White,
    height: s(50),
    width: s(50),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    paddingLeft: 2,
  },
});
export default Player;
