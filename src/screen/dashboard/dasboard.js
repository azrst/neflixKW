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
import ModalDetailMovie from '../../component/Modal/modalDetailMovie';

export default function Dasboard() {
  const dispatch = useDispatch();
  //   const recomendedMovieData = useSelector(
  //     state => state?.fetchRecomendMovie?.data,
  //   );
  const counterReducer = useSelector(state => state?.counter?.value);
  const recomendedMovieData = useSelector(state => state?.recomendMovie);
  const content = ['', '', '', '', '', '', '', ''];
  const {yCoordinate, setYCoordinate} = useUIContext();
  const [modalDetailMovie, setModalDetailMovie] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [enjoySunday, setEnjoySunday] = useState({loading: true, data: null});
  const [specialForYou, setSpecialForYou] = useState(null);

  const getRecomendMovie = async () => {
    dispatch(REQ_RECOMEND_MOVIE());
    const rand = Math.floor(Math.random() * 101);
    let body = {
      page: rand,
      include_video: true,
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
  const getRecomendMovie2 = async type => {
    const rand = Math.floor(Math.random() * 101);
    let body = {
      page: rand,
      include_video: true,
    };
    try {
      const res = await apiManager(endpoint.recomended, body, 'GET');
      if (res.status === 200) {
        console.log('enjoy sunday res : ', res.status);
        controlGetRecomentMovie(type, res?.data?.results);
      } else {
      }
    } catch (err) {}
  };
  const controlGetRecomentMovie = (type, res) => {
    const result = {
      loading: false,
      data: res,
    };
    switch (type) {
      case 'enjoySunday':
        console.log('set enjoy sunday');
        setEnjoySunday(result);
        break;
      case 'specialForYou':
        setSpecialForYou(result);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getRecomendMovie();
      getRecomendMovie2('enjoySunday');
      getRecomendMovie2('specialForYou');
    }, 3000);
  }, []);

  const controlSelectedMovie = item => {
    console.log(item);
    setSelectedMovie(item);
    setModalDetailMovie(true);
  };

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
          <ModalDetailMovie
            open={modalDetailMovie}
            close={() => {
              setModalDetailMovie(false);
            }}
            movie={selectedMovie}
          />
          <BannerTop />
          <FlatListMovie
            selectedMovie={item => {
              controlSelectedMovie(item);
            }}
            movie={recomendedMovieData}
          />
          <FlatListMovie
            selectedMovie={item => {
              controlSelectedMovie(item);
            }}
            movie={enjoySunday}
            title={'Enjoy Sunday'}
          />
          <FlatListMovie
            selectedMovie={item => {
              controlSelectedMovie(item);
            }}
            movie={specialForYou}
            title={'Special for You'}
          />
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
