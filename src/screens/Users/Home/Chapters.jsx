import React, {useState, useCallback} from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import ChapterHeader from '../../../components/Header/ChapterHeader';
import {chapterData} from '../../../Constants/Data';
import ChapterCard from '../../../components/Cards/ChapterCard';
import ChapterLoader from '../../../components/Skeletons/ChapterLoader';

const Chapters = ({navigation, route}) => {
  const {item} = route.params;
  const [load, setLoad] = useState(true);
  const [select, setSelect] = useState('');

  const onSubmit = ele => {
    setSelect(ele.id);
    navigation.navigate('player', {ele, item});
  };
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  setTimeout(() => {
    setLoad(false);
  }, 5000);
  return (
    <SafeAreaView style={[GlobalStyle.Container]}>
      <ChapterHeader title={item.title} />
      {load ? (
        <>
          <ChapterLoader />
          <ChapterLoader />
          <ChapterLoader />
        </>
      ) : (
        <FlatList
          data={chapterData}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <ChapterCard
              data={item}
              focus={select == item.id}
              onPress={() => onSubmit(item)}
            />
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Chapters;
