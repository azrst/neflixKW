import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
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
}) => {
  //   data = [{title: '1'}, {title: '2'}, {title: '3'}];

  const dumyTitleRender = () => {
    return (
      <View>
        <SkeletonPlaceholder speed={2000} backgroundColor="gray">
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
              <SkeletonPlaceholder speed={2000} backgroundColor="gray">
                <View style={style.cardDummy} />
              </SkeletonPlaceholder>
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
      {/* <TextSubTitle title={JSON.stringify(movie)} /> */}
      <View>
        {movie.loading ? (
          <View>{dumyCardRender()}</View>
        ) : (
          <View>
            <FlatList
              maxToRenderPerBatch={4}
              initialNumToRender={4}
              data={movie?.data?.filter((item, index) => index <= 4)}
              horizontal
              keyExtractor={(item, index) => `flatlistMovie_${index}`}
              renderItem={({item, index}) => (
                <TouchableOpacity>
                  <View>
                    <Image
                      style={style.cardDummy}
                      source={{uri: `${imageLink}${item?.poster_path}`}}
                    />
                  </View>
                </TouchableOpacity>
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
    paddingTop: 30,
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
    marginHorizontal: 10,
    resizeMode: 'cover',
    marginTop: 20,
  },
});

export default FlatlistMovie;
