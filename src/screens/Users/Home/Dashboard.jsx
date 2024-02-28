import React, {useCallback, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {useFocusEffect} from '@react-navigation/native';
import Header from '../../../components/Header/Header';
import {scale} from 'react-native-size-matters';
import {Font} from '../../../utils/font';
import {Colors} from '../../../utils/Colors';
import {Category} from '../../../Constants/Data';
import CategoryCard from '../../../components/Cards/CategoryCard';
import Skeleton from '../../../components/Skeletons/Skeleton';

const Dashboard = ({navigation}) => {
  const [load, setLoad] = useState(true);
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.showBar,
      });
    }, []),
  );
  setTimeout(() => {
    setLoad(false);
  }, 5000);
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <StatusBar backgroundColor={Colors.Black} />
      <Header Title="Dashboard" search setting />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyle.Padding}>
          <Text style={styles.Title}>Top Listens from category</Text>
        </View>

        <View style={GlobalStyle.MapContainer}>
          {load ? (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            Category?.map(item => (
              <CategoryCard
                data={item}
                key={item.id}
                onPress={() =>
                  navigation.navigate('category_detail', {
                    item
                  })
                }
              />
            ))
          )}
        </View>
        <View style={GlobalStyle.Height} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  Title: {
    fontSize: scale(18),
    fontFamily: Font.Work500,
    color: Colors.White,
  },
});
