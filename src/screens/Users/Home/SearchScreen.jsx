import {
  StyleSheet,
  ActivityIndicator,
  View,
  StatusBar,
  Pressable,
  TextInput,
  FlatList,
  Image,
  Text,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import {Font} from '../../../utils/font';
import {Category} from '../../../Constants/Data';
import EmptyCard from './EmptyCard';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [SearchLoad, setSearchLoad] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = text => {
    setSearchQuery(text);
    const results = Category.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(results);
  };
  const handleCancel = () => {
    setSearchQuery('');
  };

  const renderItem = ({item}) => (
    <View style={styles.renderView}>
      <View style={styles.ImageBox}>
        <Image
          style={styles.Img}
          resizeMode="cover"
          source={{uri: item?.image}}
        />
      </View>
      <View style={{marginHorizontal: scale(10), width: '65%'}}>
        <Text style={styles.TextOne} allowFontScaling>
          {item?.title}
        </Text>
        <Text style={styles.TextTwo}>{item?.author}</Text>
        <Text style={styles.TextTwo} numberOfLines={5}>
          {item?.book_name}
        </Text>
      </View>
    </View>
  );
  return (
    <>
      <StatusBar backgroundColor={Colors.Black} />
      <View style={styles.mainView}>
        <View style={styles.headView}>
          <View style={styles.innerView}>
            <Pressable
              onPress={() => navigation.goBack()}
              android_ripple={{color: Colors.Main, borderless: true}}>
              <AntDesign
                name="arrowleft"
                color={Colors.White}
                size={scale(22)}
              />
            </Pressable>
            <TextInput
              style={styles.Input}
              placeholderTextColor="#A9A9A9"
              placeholder="Artists, Songs or Live Streams"
              onChangeText={text => handleSearch(text)}
              autoFocus
              value={searchQuery}
              returnKeyType="search"
            />
          </View>
          {searchQuery.length >= 1 ? (
            SearchLoad ? (
              <ActivityIndicator
                style={{position: 'absolute', right: scale(20)}}
                color={Colors.White}
                size={scale(25)}
              />
            ) : (
              <Pressable
                style={{position: 'absolute', right: scale(20)}}
                onPress={handleCancel}>
                <Ionicons name="close-circle" color="#fff" size={scale(22)} />
              </Pressable>
            )
          ) : null}
        </View>
        {searchQuery.length >= 1 ? (
          <FlatList
            data={searchResults}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            ListEmptyComponent={() => {
              return <EmptyCard />;
            }}
          />
        ) : (
          <EmptyCard />
        )}
      </View>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: Colors.Black,
  },
  headView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(55),
    paddingHorizontal: moderateScale(15),
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBlockColor: '#A9A9A9',
  },
  innerView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Input: {
    marginLeft: moderateScale(7),
    width: '100%',
    color: Colors.White,
    fontFamily: Font.Inter400,
    fontSize: scale(14),
  },
  renderView: {
    flexDirection: 'row',
    marginVertical: moderateVerticalScale(15),
  },
  ImageBox: {
    width: scale(85),
    height: verticalScale(60),
  },
  Img: {
    width: '100%',
    height: '100%',
    borderRadius: scale(10),
  },
  TextOne: {
    fontSize: scale(16),
    fontFamily: Font.Inter700,
    color: Colors.White,
  },
  TextTwo: {
    fontSize: scale(10),
    fontFamily: Font.Inter400,
    color: Colors.White,
  },
});
