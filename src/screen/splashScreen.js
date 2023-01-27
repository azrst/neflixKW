/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 2500);
  }, []);

  return (
    <View style={style.container}>
      <Image
        style={{
          width: '90%',
          height: '30%',
          resizeMode: 'cover',
        }}
        source={require('../asset/logo2.gif')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#040204',
  },
});
