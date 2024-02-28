import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SmallBookView from '../components/Modals/SmallBookView';

const BooksSmallViewHOC = (WrappedComponent) => {
    const EnhancedComponent = (props) => {
  return (
    <View style={{ flex: 1 }}>
    <WrappedComponent {...props} />
    <SmallBookView />
  </View>
  )
}


return EnhancedComponent;
};

export default BooksSmallViewHOC