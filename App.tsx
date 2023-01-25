/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StatusBar} from 'react-native';
import Root from './src/navigation/root';
import {UIProvider} from './src/manager/context/AppContext';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <UIProvider>
        <Root />
      </UIProvider>
    </View>
  );
};

export default App;
