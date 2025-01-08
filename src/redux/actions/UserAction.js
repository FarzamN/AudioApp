import AsyncStorage from '@react-native-async-storage/async-storage';
import {BOOKS} from '../reducer/Holder';
import Toast from 'react-native-simple-toast';

export const audio_data = load => {
  load(true);
  return async dispatch => {
    let url = 'https://sassolution.org/BlowMeUp/api/song';
    try {
      const response = await fetch(url);
      const responseData = await response.json();
      console.log('response', responseData);
      if (responseData.success.status == 200) {
        dispatch({type: BOOKS, payload: responseData.success.data});
        load(false);
      } else {
        Toast.show('catch something went wrong');
        load(false);
      }
    } catch (error) {
      Toast.show('something went wrong');
      load(false);
    }
  };
};
