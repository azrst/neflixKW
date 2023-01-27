/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {imageLink} from '../../utils/variables';
import TextSubTitle from '../Text/TextSubTitle';
import Fragment from '../Fragment/Fragment';
import TextTitle from '../Text/TextTitle';
import apiManager from '../../manager/api/apiManager';
import {endpoint} from '../../utils/endpoint';
import FlatlistMovie from '../FlatlistMovie/flatlistMovie';

const ModalDetailMovie = ({
  open = false,
  close = () => {},
  movie = {},
  setMovie = () => {},
}) => {
  const [opacityImage, setOpacityImage] = useState(0.8);
  const [movieDetail, setMovieDetail] = useState(null);
  const [movieSimilar, setMovieSimilar] = useState({
    loading: true,
    data: null,
  });

  const recommendMovieSelect = item => {
    snapToTop();
    setMovie(item);
    console.log(item);
  };
  useEffect(() => {
    // setMovie(movie);
  }, []);

  const snapToTop = () => {
    this.scroll.scrollTo({x: 0, y: 0, animated: true});
  };

  const fetchMovieDetail = async () => {
    const res = await apiManager(
      `${endpoint.movieDetail}/${movie?.id}`,
      {},
      'GET',
    );
    if (res.status === 200) {
      setMovieDetail(res.data);
    }
    console.log('movie detail : ', res.status);
  };
  useEffect(() => {
    fetchMovieDetail();
  }, [movie]);

  const fetchMovieRecomendation = async () => {
    let fetch = movieSimilar;
    fetch = {
      loading: true,
      data: null,
    };
    setMovieSimilar(fetch);

    let body = {
      page: 1,
    };
    const res = await apiManager(
      endpoint.movieDetail + movie?.id + '/recommendations',
      body,
      'GET',
    );

    if (res.status === 200) {
      console.log('api recomen movie : ', res.data.results.length);

      if (res.data.results.length > 0) {
        fetch = {
          loading: false,
          data: res.data.results,
        };
        setMovieSimilar(fetch);
        console.log('api recomen movie : ', res.data.results.length);
      } else {
        fetch = {
          loading: null,
          data: null,
        };
        setMovieSimilar(fetch);
      }
    } else {
      fetch = {
        loading: null,
        data: null,
      };
      setMovieSimilar(fetch);
    }
  };
  useEffect(() => {
    console.log('movie id : ', movie?.id);
    fetchMovieRecomendation();
  }, [movie]);

  return (
    <Modal
      transparent={true}
      swipeDirection="down"
      onRequestClose={() => {
        close();
      }}
      onSwipe={() => {
        console.log('swipe');
      }}
      animationType="fade"
      visible={open}
      style={style.modalContainer}>
      <ScrollView
        ref={c => {
          this.scroll = c;
        }}
        showsVerticalScrollIndicator={false}
        onScroll={async event => {
          const y = event.nativeEvent.contentOffset.y;
          console.log(y);
          if (y <= -80) {
            close();
          }
        }}
        scrollEventThrottle={16}>
        {/* <TouchableOpacity
            onPress={() => {
              close();
            }}> */}
        {/* Image Backdrop Path */}
        <View>
          <View style={{backgroundColor: 'black', opacity: opacityImage}}>
            <Image
              onLoadEnd={() => {
                setOpacityImage(1);
              }}
              style={style.imageContainer}
              source={{uri: `${imageLink}${movie?.backdrop_path}`}}
            />
          </View>
        </View>
        <View>
          <BlurView
            style={style.absolute}
            blurType="dark"
            blurAmount={10}
            reducedTransparencyFallbackColor="black"
          />
          <Fragment>
            {/* Title */}
            <View style={style.containerTitle}>
              <TextTitle numberOfLines={2} title={movie?.title} />
            </View>
            {/* Tagline */}
            {movieDetail?.tagline && (
              <View style={style.containerTagline}>
                <TextSubTitle title={movieDetail?.tagline} />
              </View>
            )}
            {/* Ratting and Year release */}
            <View style={style.containerDate}>
              <TextSubTitle
                fontSize={16}
                style={{
                  color:
                    movie?.vote_average >= 7.5
                      ? 'green'
                      : movie?.vote_average >= 5
                      ? 'yellow'
                      : 'red',
                  paddingRight: 10,
                }}
                title={movie?.vote_average}
              />
              <TextSubTitle
                fontSize={18}
                title={movie?.release_date.replace(/""/g, '').slice(0, 4)}
              />
            </View>
            {/* movie genre */}
            <View
              style={{flexDirection: 'row', flexWrap: 'wrap', paddingTop: 10}}>
              {movieDetail?.genres.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingRight: index == 0 ? 0 : 10,
                      marginRight: 10,
                    }}>
                    <View style={style.circleOrange} />
                    <TextSubTitle fontSize={16} title={item?.name} />
                  </View>
                );
              })}
            </View>
            {/* button play */}
            <TouchableOpacity
              onPress={() => {
                console.log('pressed');
              }}>
              <View style={style.containerButton}>
                <View style={style.buttonContainer}>
                  <Icon
                    style={{paddingRight: 5}}
                    name="play-circle"
                    size={20}
                    color="black"
                  />
                  <TextSubTitle colors="black" title={'Play'} />
                </View>
              </View>
            </TouchableOpacity>
            {/* button download */}
            <TouchableOpacity
              onPress={() => {
                console.log('pressed');
              }}>
              <View style={style.containerButton}>
                <View style={style.buttonDownloadContainer}>
                  <Icon
                    style={{paddingRight: 5}}
                    name="download"
                    size={20}
                    color="white"
                  />
                  <TextSubTitle
                    fontSize={16}
                    colors="white"
                    title={'Download'}
                  />
                </View>
              </View>
            </TouchableOpacity>

            {/* movie description */}
            <View style={style.containerDesc}>
              <TextSubTitle
                fontSize={16}
                // title={JSON.stringify(movie?.overview)}
                title={movie?.overview.replace(/"/g, '')}
              />
            </View>
            {/* <TouchableOpacity
              onPress={() => {
                this.scroll.scrollTo({x: 0, y: 0, animated: true});
              }}>
              <View style={style.containerTitle}>
                <TextSubTitle
                  title={JSON.stringify(JSON.stringify(movieDetail))}
                />
              </View>
            </TouchableOpacity> */}
          </Fragment>
          {movieSimilar?.loading !== null && (
            <View style={{paddingBottom: 50}}>
              <FlatlistMovie
                movie={movieSimilar}
                title={'Recommendation'}
                selectedMovie={item => {
                  // controlSelectedMovie(item);
                  console.log(item);
                  recommendMovieSelect(item);
                }}
              />
            </View>
          )}
        </View>
        {/* </TouchableOpacity> */}
      </ScrollView>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    // flex: 1,
  },
  modalContainer: {
    flex: 1,
    height: Dimensions.get('window').height * 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  imageContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'cover',
  },
  containerTitle: {
    paddingVertical: 10,
  },
  containerTagline: {
    paddingBottom: 20,
  },
  containerDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDesc: {
    paddingTop: 20,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  circleOrange: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: 'orange',
    marginRight: 10,
  },
  containerButton: {
    paddingTop: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    opacity: 0.8,
  },
  buttonDownloadContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    opacity: 0.5,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default ModalDetailMovie;
