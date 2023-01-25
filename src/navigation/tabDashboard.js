import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, StyleSheet} from 'react-native';
import BlurView from '@react-native-community/blur';
// import Dashboard from '../screen/home/dashboard/dashboardScreen';
// import Discovery from '../screen/home/discovery/discoveryScreen';
import Dashboard from '../screen/dashboard/dasboard';

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          //   paddingBottom: Platform.OS === 'ios' ? 10 : 5,
          //   marginHorizontal: 10,
          //   paddingTop: 20,
          //   borderRadius: 10,
          backgroundColor: 'gray',
          opacity: 0.8,
        },
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen name="DashboardScreen" component={Dashboard} />
      {/* <Tab.Screen name="DiscoveryScreen" component={Discovery} /> */}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default HomeTab;
