/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useUIContext} from '../../manager/context/AppContext';
import {
  darkGradient,
  darkGradientRevert,
  darkGradientRevert2,
} from '../../utils/colors';
import {interpolate, STATUSBAR_HEIGHT} from '../../utils/ultility';
import BannerTop from './component/bannerTop/BannerTop';

import HeaderDashboard from './component/headerDashboard.js/headerDashboard';

export default function dasboard() {
  const content = ['', '', '', '', '', '', '', ''];
  const {yCoordinate, setYCoordinate} = useUIContext();

  return (
    <View>
      <ScrollView
        onScroll={async event => {
          const y = event.nativeEvent.contentOffset.y;
          //   console.log('coor : ', y);
          setYCoordinate(y);
        }}
        scrollEventThrottle={16}
        onscroll
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.container}>
          <BannerTop />
          {content.map((item, index) => {
            return (
              <View style={{paddingBottom: 30}}>
                <Text>{index}. dashboardPage</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <HeaderDashboard />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: 50,
    // paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});
