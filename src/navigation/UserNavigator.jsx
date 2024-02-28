import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';

import Dashboard from '../screens/Users/Home/Dashboard';
import Category_Detail from '../screens/Users/Home/Category_Detail';
import SingleBookDetail from '../screens/Users/Home/SingleBookDetail';
import Player from '../screens/Users/Home/Player';
import Chapters from '../screens/Users/Home/Chapters';

import Profile from '../screens/Users/Profile/UserProfile';
import Library from '../screens/Users/Library/UserLibrary';
import Setting from '../screens/Users/Setting/UserSetting';
import Language from '../screens/Users/Setting/Language';
import Term from '../screens/Users/Setting/Term';
import ChangePassword from '../screens/Users/Setting/ChangePassword';

import {ms, s} from 'react-native-size-matters';
import {Colors} from '../utils/Colors';
import {Font} from '../utils/font';
import SearchScreen from '../screens/Users/Home/SearchScreen';

const UserNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarLabelPosition: 'below-icon',
          headerShown: false,
          tabBarActiveTintColor: Colors.White,
          tabBarInactiveTintColor: Colors.Grey,
          tabBarLabelStyle: {
            fontSize: s(11),
            textTransform: 'capitalize',
            fontFamily: Font.Work500,
            paddingBottom: ms(3),
          },
        }}>
        <Tab.Screen
          name="home"
          component={AllDashboard}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/image/Icons/home.png')}
                style={styles.Image}
              />
            ),
          }}
        />
        <Tab.Screen
          name="library"
          component={AllLibrary}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/image/Icons/library.png')}
                style={styles.Image}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={AllProfile}
          options={{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/image/Icons/profile.png')}
                style={styles.Image}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export const styles = StyleSheet.create({
  Image: {
    width: s(25),
    height: s(30),
    resizeMode: 'contain',
  },
});

export default UserNavigator;

const Stack = createNativeStackNavigator();

function AllDashboard() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'flip'}}
      initialRouteName="dashboard">
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="language" component={Language} />
      <Stack.Screen name="term" component={Term} />
      <Stack.Screen name="category_detail" component={Category_Detail} />
      <Stack.Screen name="singleBookDetail" component={SingleBookDetail} />
      <Stack.Screen name="player" component={Player} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="changePassword" component={ChangePassword} />
    </Stack.Navigator>
  );
}

function AllLibrary() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'flip'}}
      initialRouteName="book_library">
      <Stack.Screen name="user_library" component={Library} />
      <Stack.Screen name="chapters" component={Chapters} />
    </Stack.Navigator>
  );
}

function AllProfile() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'flip'}}
      initialRouteName="userprofile">
      <Stack.Screen name="userprofile" component={Profile} />
    </Stack.Navigator>
  );
}
