import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TextTitle({
  title = '',
  colors = 'white',
  numberOfLines = undefined,
}) {
  return (
    <View>
      <Text numberOfLines={numberOfLines} style={[style.text, {color: colors}]}>
        {title}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 24,
  },
});
