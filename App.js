import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PortalProvider } from '@gorhom/portal';
import { Provider } from 'react-redux';
import {
    LogBox,
    StatusBar
} from 'react-native';

import store from './src/store';
import Navigation from './src/router/Tab';

// Ignore warnings
LogBox.ignoreLogs(['Non-serializable values were found in the navigation state']);
LogBox.ignoreAllLogs();


const App = () => (
    <Provider store={store}>
        <StatusBar hidden={true} />
        <SafeAreaProvider>
            <PortalProvider>
                <Navigation />
            </PortalProvider>
        </SafeAreaProvider>
    </Provider>
);

export default App;