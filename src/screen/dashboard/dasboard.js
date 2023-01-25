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
import {STATUSBAR_HEIGHT} from '../../utils/ultility';
import BannerTop from './component/bannerTop/BannerTop';

import HeaderDashboard from './component/headerDashboard.js/headerDashboard';

export default function dasboard() {
  const content = ['', '', '', '', '', '', '', ''];
  const {yCoordinate, setYCoordinate} = useUIContext();

  return (
    <View>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={event => {
          const y = event.nativeEvent.contentOffset.y;
          //   console.log('coor : ', y);
          setYCoordinate(y);
        }}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}>
        <View style={style.container}>
          {/* <LinearGradient colors={darkGradientRevert}> */}
          <BannerTop />
          {content.map((item, index) => {
            return (
              <View style={{paddingBottom: 30}}>
                <Text>{index}. dashboardPage</Text>
              </View>
            );
          })}
          {/* </LinearGradient> */}
          <View>
            <Image
              source={require('../../asset/sample.jpg')}
              style={{
                width: 200,
                height: 800,
                resizeMode: 'cover',
                zIndex: 0,
              }}
            />
          </View>
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
