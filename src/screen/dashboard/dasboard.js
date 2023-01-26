/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import {
  REQ_RECOMEND_MOVIE,
  SET_RECOMEND_MOVIE,
  FAIL_RECOMENDED_MOVIE,
} from '../../redux/reducer/recomendMovie';

import {useUIContext} from '../../manager/context/AppContext';
import {
  darkGradient,
  darkGradientRevert,
  darkGradientRevert2,
} from '../../utils/colors';
import {interpolate, STATUSBAR_HEIGHT} from '../../utils/ultility';
import BannerTop from './component/bannerTop/BannerTop';
import FlatListMovie from '../../component/FlatlistMovie/flatlistMovie';

import HeaderDashboard from './component/headerDashboard.js/headerDashboard';
import TextSubTitle from '../../component/Text/TextSubTitle';
import {incrementByAmount} from '../../redux/reducer/sampleReducer';
import {fetchRecomendMovie} from '../../service/fetchRecomendMovie';
import apiManager from '../../manager/api/apiManager';
import {endpoint} from '../../utils/endpoint';

export default function dasboard() {
  const dispatch = useDispatch();
  //   const recomendedMovieData = useSelector(
  //     state => state?.fetchRecomendMovie?.data,
  //   );
  const counterReducer = useSelector(state => state?.counter?.value);
  const recomendedMovieData = useSelector(state => state?.recomendMovie);
  const content = ['', '', '', '', '', '', '', ''];
  const {yCoordinate, setYCoordinate} = useUIContext();

  const getRecomendMovie = async () => {
    dispatch(REQ_RECOMEND_MOVIE());
    let body = {
      page: 1,
      language: 'en-US',
    };
    try {
      const res = await apiManager(endpoint.recomended, body, 'GET');
      if (res.status === 200) {
        dispatch(SET_RECOMEND_MOVIE(res.data.results));
      } else {
        dispatch(FAIL_RECOMENDED_MOVIE('failed to load'));
      }
    } catch (err) {
      dispatch(FAIL_RECOMENDED_MOVIE('failed to load'));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getRecomendMovie();
    }, 3000);
  }, []);

  return (
    <View>
      <ScrollView
        onScroll={async event => {
          const y = event.nativeEvent.contentOffset.y;
          setYCoordinate(y);
        }}
        scrollEventThrottle={16}
        onscroll
        showsVerticalScrollIndicator={false}
        bounces={false}>
        <View style={style.container}>
          <BannerTop />
          <FlatListMovie movie={recomendedMovieData} />
        </View>
      </ScrollView>
      <HeaderDashboard />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingBottom: Dimensions.get('window').height * 0.2,
    // paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: 'black',
  },
});
