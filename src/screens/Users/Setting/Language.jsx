import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Header from '../../../components/Header/Header';
import {GlobalStyle} from '../../../Constants/GlobalStyle';
import {LanguageData} from '../../../Constants/Data';
import LanguageItem from '../../../components/Cards/LanguageItem';
import CustomButton from '../../../components/CustomButton';

const Language = () => {
  const [select, setSelect] = useState(1);
  const handleLanguage = item => {
    setSelect(item.id);
  };
  return (
    <SafeAreaView style={GlobalStyle.Container}>
      <Header Title="Language" Back />
      {LanguageData.map(item => (
        <LanguageItem
          key={item.id}
          data={item}
          onPress={() => handleLanguage(item)}
          focus={item.id == select}
        />
      ))}
      <CustomButton
        title="Continue"
        containerStyle={GlobalStyle.SettingButton}
      />
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({});
