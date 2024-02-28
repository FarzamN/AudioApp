import {Text, View, SafeAreaView} from 'react-native';
import React, {useCallback, useState} from 'react';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import Header from '../../../components/Header/Header';
import {useFocusEffect} from '@react-navigation/native';
import SettingItem from '../../../components/Cards/SettingItem';
import CustomButton from '../../../components/CustomButton';
import {useDispatch} from 'react-redux';
import {USER_DETAILS} from '../../../redux/reducer/Holder';
import DeleteModal from '../../../components/Modals/DeleteModal';

const UserSetting = ({navigation}) => {
  const dispatch = useDispatch();
  const [DeleteModalVisible, setDeleteModalVisible] = useState(false);

  const logout = () => {
    dispatch({type: USER_DETAILS, payload: null});
  };
  useFocusEffect(
    useCallback(() => {
      navigation.getParent()?.setOptions({
        tabBarStyle: GlobalStyle.HideBar,
      });
    }, []),
  );
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <Header Title="Setting" Back />
      <SettingItem
          password
          Title="Change Password"
          onPress={() => navigation.navigate('changePassword')}
        />
      <SettingItem
        onPress={() =>
          navigation.navigate('term', {
            type: 'term',
          })
        }
        Title="Term and condition"
        Term
      />
      <SettingItem
        onPress={() =>
          navigation.navigate('term', {
            type: 'privacy',
          })
        }
        Title="privacy policy"
        privacy
      />
      <SettingItem
        onPress={() => setDeleteModalVisible(true)}
        Title="delete account"
        delete
      />
      <CustomButton
        onPress={logout}
        title="Logout"
        containerStyle={GlobalStyle.SettingButton}
      />
      <DeleteModal
        visible={DeleteModalVisible}
        OnClose={() => setDeleteModalVisible(false)}
        // DeletePress={Delete}
        value="this account"
        account
      />
    </SafeAreaView>
  );
};

export default UserSetting;
