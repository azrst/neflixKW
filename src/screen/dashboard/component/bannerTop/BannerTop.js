import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextSubTitle from '../../../../component/Text/TextSubTitle';
import TextTitle from '../../../../component/Text/TextTitle';

export default function BannerTop() {
  const imgSource =
    'https://occ-0-6707-58.1.nflxso.net/dnm/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABef6S1GOeh1cXCMvm0yLSVwwe5cQtblOF8CLdV4mVmkdHIBmulmTudZmCLNE2_EC_Z4SC5Q8BJDP_zV3FnaEMzncbHnLk8LFZ8EtWuHQnJtTy5viTT0XAe_xbZ_RX-mdrRt-Jw.jpg';

  return (
    <View>
      <View style={{}}>
        {/* <ScrollView horizontal> */}
        <Image source={{uri: imgSource}} style={style.imageContainer} />
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
