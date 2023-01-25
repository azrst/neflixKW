/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import {interpolate, STATUSBAR_HEIGHT} from '../../../../utils/ultility';
import {darkGradient} from '../../../../utils/colors';
import TextTitle from '../../../../component/Text/TextTitle';
import Fragment from '../../../../component/Fragment/Fragment';
import TextSubTitle from '../../../../component/Text/TextSubTitle';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useUIContext} from '../../../../manager/context/AppContext';

export default function headerDashboard() {
  let [filterData, setDataFilter] = useState([
    {title: 'TV Show', flag: false},
    {title: 'Movie', flag: false},
    {title: 'Category', flag: false},
  ]);
  const [filterKey, setFilterKey] = useState(null);

  const {yCoordinate, setYCoordinate} = useUIContext();

  return (
    <View
      style={[
        style.container,
        {
          opacity: interpolate({
            inputRange: [yCoordinate, 370],
            outputRange: [0, 0.8],
            yCoordinate,
          }),
        },
      ]}>
      <Fragment>
        <View style={style.flexContainer}>
          <View style={{flex: 6 / 10}}>
            <TextTitle numberOfLines={1} title="Hi, Aziz" />
          </View>

          <View
            style={{
              flex: 4 / 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                alignItems: 'flex-end',
                marginRight: 20,
              }}>
              <TouchableOpacity>
                <IconMaterial name="cast" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-end', marginRight: 20}}>
              <TouchableOpacity>
                <Icon name="search" size={25} color="white" />
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <TouchableOpacity>
                <IconMaterial name="person" size={30} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Fragment>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: STATUSBAR_HEIGHT,
    position: 'absolute',
    width: '100%',
    backgroundColor: '#2e2e2e',
  },
  filterContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    position: 'absolute',
    alignItems: 'flex-end',
    height: Dimensions.get('window').height * 0.12,
  },
  flexContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  absolute: {
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  titleFilter: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.8,
    borderColor: 'white',
    borderRadius: 50,
    marginRight: 12,
  },
});
