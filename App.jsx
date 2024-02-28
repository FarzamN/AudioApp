import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Splash from './src/screens/SplashScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import UserNavigator from './src/navigation/UserNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {USER_DETAILS} from './src/redux/reducer/Holder';
import Toast from 'react-native-simple-toast';
import SplashScreen from 'react-native-splash-screen'
const App = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  const userDetails = useSelector(state => state.userDetails);

  const checkStatus = async () => {
    const data = await AsyncStorage.getItem('userDetails');
    const userData = JSON.parse(data);
    if (userData != null) {
      dispatch({type: USER_DETAILS, payload: 'user@gmail.com'});
    } else {
      Toast.show('Please login');
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 300);
  }, [])

  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <>
      {loading ? (
        <Splash />
      ) : (
        <>
          {userDetails == null && <AuthNavigator />}
          {userDetails == 'user@gmail.com' && <UserNavigator />}
        </>
      )}
    </>
  );
};

export default App;
