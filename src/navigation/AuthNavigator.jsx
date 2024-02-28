import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Authentication/Login';
import OverBoard from '../screens/Authentication/OverBoard';
import Register from '../screens/Authentication/Register';
import OTP from '../screens/Authentication/OTP';
import Forget_Password from '../screens/Authentication/Forget_Password';
import Reset_Password from '../screens/Authentication/Reset_Password';
import Subscription from '../screens/Authentication/Subscription';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="overBoard"
        screenOptions={{headerShown: false, animation: 'flip'}}>
        <Stack.Screen name="overBoard" component={OverBoard} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="otp" component={OTP} />
        <Stack.Screen name="reset" component={Reset_Password} />
        <Stack.Screen name="forget" component={Forget_Password} />
        <Stack.Screen name="subscription" component={Subscription} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
