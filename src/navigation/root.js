import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StatusBar} from 'react-native';

import Splash from '../screen/splashScreen';
import TabDashboard from './tabDashboard';

const Stack = createNativeStackNavigator();

const Root = () => {
  //   const navigation = useNavigation();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      {/* <StatusBar backgroundColor={primaryYellow} barStyle="light-content" /> */}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="SplashScreen" component={Splash} />
          <Stack.Screen name="HomeScreen" component={TabDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Root;
