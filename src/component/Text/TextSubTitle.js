import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function TextSubTitle({
  title = '',
  colors = 'white',
  numberOfLines = undefined,
  fontSize = 18,
  style = {},
}) {
  return (
    <View>
      <Text
        numberOfLines={numberOfLines}
        style={[style.text, {fontSize: fontSize, color: colors}, style]}>
        {title}
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  text: {
    color: 'white',
    // fontWeight: '500',
    fontSize: 18,
  },
});
