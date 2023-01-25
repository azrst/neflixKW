import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import interpolate from 'interpolate-range';
import TextSubTitle from '../../../../component/Text/TextSubTitle';
import TextTitle from '../../../../component/Text/TextTitle';
import {useUIContext} from '../../../../manager/context/AppContext';
import {interpolate} from '../../../../utils/ultility';

export default function BannerTop() {
  const imgSource1 =
    'https://occ-0-6707-58.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABef6S1GOeh1cXCMvm0yLSVwwe5cQtblOF8CLdV4mVmkdHIBmulmTudZmCLNE2_EC_Z4SC5Q8BJDP_zV3FnaEMzncbHnLk8LFZ8EtWuHQnJtTy5viTT0XAe_xbZ_RX-mdrRt-Jw.jpg';
  const imgSource2 =
    'https://occ-0-6707-58.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABQ0ySQUUlAsjPWoRU071UevVq42-XBb6USrRxFyrcot-m8V1XptB-dfJmV1l612FGsQtdTE_lJBf5vmWN6tP4rKwkf1GX3ycjWkN.jpg';

  const [imgSource, setImgSource] = useState(imgSource1);

  const {yCoordinate} = useUIContext();

  useEffect(() => {
    // setTimeout(() => {
    //   setImgSource(imgSource2);
    // }, 3000);

    const a = interpolate({
      inputRange: [yCoordinate, 370],
      outputRange: [0, 0.8],
    });
    console.log(a);
  }, [yCoordinate]);

  return (
    <View>
      <View style={{}}>
        {/* <ScrollView horizontal> */}
        <Animated.Image
          source={{uri: imgSource}}
          style={style.imageContainer}
          //   style={[
          //     style.imageContainer,
          //     {
          //       transform: [
          //         {
          //           translateY: yCoordinate.interpolate(yCoordinate, {
          //             inputRange: [-1000, 0],
          //             outputRange: [-100, 0],
          //             extrapolate: 'clamp',
          //           }),
          //         },
          //         {
          //           scale: yCoordinate.interpolate({
          //             inputRange: [0, 100],
          //             outputRange: [1, 1.3],
          //           }),
          //         },
          //       ],
          //     },
          //   ]}
        />
        {/* </ScrollView> */}
      </View>

      <View
        style={[
          style.imageContainer,
          {
            position: 'absolute',
          },
        ]}>
        <LinearGradient
          colors={['transparent', 'black']}
          style={[style.imageContainer, style.linearContainer]}>
          <View style={style.playerContainer}>
            <View style={style.itemContainer}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  console.log('hehe');
                }}>
                <Icon name="plus-thick" size={20} color="white" />
                <TextSubTitle title="Watch" fontSize={12} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <View style={style.playContainer}>
                <TextTitle colors="black" title="Play" />
              </View>
            </TouchableOpacity>
            <View style={style.itemContainer}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  console.log('hehe');
                }}>
                <Icon name="information-outline" size={20} color="white" />
                <TextSubTitle title="Info" fontSize={12} />
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.65,
    resizeMode: 'cover',
  },
  linearContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
  playContainer: {
    // flex: 3 / 10,
    borderRadius: 4,
    backgroundColor: '#dbdbdb',
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flex: 2.5 / 10,
    paddingHorizontal: 20,
  },
});
