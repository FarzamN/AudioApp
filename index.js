/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import { name as appName } from './app.json';
import store from './src/redux/reducer/store';
import ConnectionModal from './src/components/Modals/ConnectionModal';
const Root = () => (
    <StoreProvider store={store}>
        <App />
        <ConnectionModal />
    </StoreProvider>
);

AppRegistry.registerComponent(appName, () => Root);
