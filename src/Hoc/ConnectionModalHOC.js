import React from 'react';
import { View } from 'react-native';
import ConnectionModal from '../components/Modals/ConnectionModal';

const withConnectionModal = (WrappedComponent) => {
  const EnhancedComponent = (props) => {
    return (
      <View style={{ flex: 1 }}>
        <WrappedComponent {...props} />
        <ConnectionModal />
      </View>
    );
  };

  return EnhancedComponent;
};

export default withConnectionModal;
