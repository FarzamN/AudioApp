import React, {useCallback, useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import LibraryCard from '../../../components/Cards/LibraryCard';
import {Category, sorting} from '../../../Constants/Data';
import {Colors} from '../../../utils/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ms, s, vs, mvs} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import LibraryLoader from '../../../components/Skeletons/LibraryLoader';
import {useDispatch, useSelector} from 'react-redux';
import {audio_data} from '../../../redux/actions/UserAction';
import SortingModal from '../../../components/Modals/SortingModal';

const UserLibrary = ({navigation}) => {
  const dispatch = useDispatch();
  // const books = useSelector(state => state.books);
  const books = [
    {
      image: 'https://bookeve.pk/wp-content/uploads/2024/09/819hz4I82RL.jpg',
      title: 'The Story of a New Name',
      artist: 'Elena Ferrante',
      progress: 0.2,
      timing: '20 minuts',
    },
    {
      image: 'https://readings.com.pk/images/books/9780756404741.jpg',
      title: 'The Name Of the Wind',
      artist: 'patrick rothfuss',
      progress: 0.2,
      timing: '70 minuts',
    },
    {
      image: 'https://mpd-biblio-covers.imgix.net/9781250169440.jpg?w=600dpr=1',
      title: 'Call Me by Your Name',
      artist: 'André Aciman',
      progress: 0.7,
      timing: '10 minuts',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1311999970i/172763.jpg',
      title: 'The Book of Names',
      artist: 'Jill Gregory, Karen Tintori',
      progress: 0.5,
      timing: '20 minuts',
    },
  ];

  const [load, setLoad] = useState(false);
  const [sort, setSort] = useState(false);
  const [sortValue, setSortValue] = useState('Recent');
  const [sortedBooks, setSortedBooks] = useState([]); // State for sorted books
  const [getItem, setGetitem] = useState('');
  const onClose = () => {
    setSort(false);
  };
  // const handleSort = item => {
  //   setSortValue(item.title);
  //   let newSortedBooks = [...books]; // Create a copy of the books array
  //   switch (item.title) {
  //     case 'Recent':
  //       newSortedBooks.sort((a, b) => a.created_at - b.created_at);
  //       break;
  //     case 'A-Z':
  //       newSortedBooks.sort((a, b) => a.title.localeCompare(b.title));
  //       break;
  //     case 'Z-A':
  //       newSortedBooks.sort((a, b) => b.title.localeCompare(a.title));
  //       break;
  //     default:
  //       break;
  //   }
  //   onClose();
  //   setSortedBooks(newSortedBooks);
  //   console.log(newSortedBooks);
  // };

  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
      // dispatch(audio_data(setLoad));
    }, []),
  );
  // useEffect(() => {
  //   handleSort({title: 'Recent'});
  // }, []);

  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <View style={[GlobalStyle.Space_Between, styles.TopBox]}>
        <Text style={styles.TopTitle}>{books?.length} titles</Text>
        <TouchableOpacity style={GlobalStyle.Row} onPress={() => setSort(true)}>
          <MaterialCommunityIcons
            name="sort"
            size={s(22)}
            color={Colors.White}
          />
          <Text style={styles.TopTitle}> {sortValue}</Text>
        </TouchableOpacity>
      </View>
      {load ? (
        <>
          <LibraryLoader />
          <LibraryLoader />
          <LibraryLoader />
        </>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {books?.map(item => (
              <LibraryCard
                data={item}
                key={item.id}
                onPress={() => navigation.navigate('chapters', {item})}
              />
            ))}
          </ScrollView>
        </>
      )}
      <SortingModal visible={sort} onClose={onClose}>
        <FlatList
          data={sorting}
          renderItem={({item}) => (
            <Pressable
              style={{overflow: 'hidden'}}
              android_ripple={GlobalStyle.Yellow_Ripple}
              // onPress={() => handleSort(item)}
            >
              <Text style={styles.title}>{item.title}</Text>
            </Pressable>
          )}
        />
      </SortingModal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  TopTitle: {
    fontSize: s(18),
    color: Colors.White,
    fontFamily: Font.Work600,
  },
  TopBox: {
    marginVertical: vs(10),
    paddingHorizontal: ms(15),
  },
  title: {
    color: Colors.Main,
    fontFamily: Font.Work500,
    fontSize: s(18),
    paddingVertical: mvs(5),
    paddingHorizontal: ms(5),
  },
});
export default UserLibrary;
