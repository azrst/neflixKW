import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {imageLink} from '../../utils/variables';
import Fragment from '../Fragment/Fragment';
import TextSubTitle from '../Text/TextSubTitle';

export const FlatlistMovie = ({
  title = 'Recomendation for You',
  movie = null,
  onClick = () => {},
  selectedMovie = () => {},
}) => {
  //   data = [{title: '1'}, {title: '2'}, {title: '3'}];

  const dumyTitleRender = () => {
    return (
      <View>
        <SkeletonPlaceholder speed={2000} backgroundColor={'gray'}>
          <View style={style.titleDummy} />
        </SkeletonPlaceholder>
      </View>
    );
  };

  const dumyCardRender = () => {
    const mapping = ['', '', '', '', ''];
    return (
      <View style={{}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {mapping.map((item, index) => {
            return (
              <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                <SkeletonPlaceholder speed={2000} backgroundColor="smokegray">
                  <View style={style.cardDummy} />
                </SkeletonPlaceholder>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={style.container}>
      <Fragment>
        {movie?.loading ? (
          <View>{dumyTitleRender()}</View>
        ) : (
          <View>
            <TextSubTitle title={title} />
          </View>
        )}
      </Fragment>
      <View>
        {movie?.loading ? (
          <View>{dumyCardRender()}</View>
        ) : (
          <View style={{}}>
            <FlatList
              data={movie?.data}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => `flatlistMovie_${index}`}
              renderItem={({item, index}) => (
                <View style={{paddingHorizontal: 10, paddingVertical: 20}}>
                  <TouchableOpacity
                    onPress={() => {
                      selectedMovie(item);
                    }}>
                    <View
                      style={[
                        style.cardDummy,
                        Platform.OS === 'ios' ? style.cardDummyShadow : {},
                      ]}>
                      <Image
                        style={style.cardDummy}
                        source={{uri: `${imageLink}${item?.poster_path}`}}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        )}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  titleDummy: {
    width: Dimensions.get('window').width * 0.4,
    height: 15,
    borderRadius: 20,
    backgroundColor: 'red',
  },
  cardDummy: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 20,
    // marginHorizontal: 10,
    resizeMode: 'cover',

    elevation: 5,
  },
  cardDummyShadow: {
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 5.22,
  },
});

export default FlatlistMovie;
