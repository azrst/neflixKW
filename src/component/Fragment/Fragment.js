import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Fragment = ({props, children}) => {
  return (
    <View style={style.container} {...props}>
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default Fragment;
