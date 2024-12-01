import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './store';
import Loader from './components/Loader';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Tabs from './TabMenuNavigation';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
        <Loader />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
