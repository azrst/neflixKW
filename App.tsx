/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/redux/store';
import Root from './src/navigation/root';
import {UIProvider} from './src/manager/context/AppContext';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <UIProvider>
        <Provider store={store}>
          <Root />
        </Provider>
      </UIProvider>
    </View>
  );
};

export default App;
