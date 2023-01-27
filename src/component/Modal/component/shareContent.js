import React, {useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextSubTitle from '../../Text/TextSubTitle';

const ShareContent = () => {
  const [watchLatter, setWatchLatter] = useState(false);
  const [download, setDownload] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);

  return (
    <View style={style.rowContainer}>
      <View style={style.itemContainer}>
        <TouchableOpacity
          style={style.itemContainer}
          onPress={() => {
            setWatchLatter(!watchLatter);
          }}>
          <Icon
            name={watchLatter ? 'check-all' : 'shape-square-rounded-plus'}
            color={watchLatter ? 'green' : 'white'}
            size={25}
            style={{paddingBottom: 10}}
          />
          <TextSubTitle fontSize={12} title="Watch Latter" />
        </TouchableOpacity>
      </View>
      <View style={style.itemContainer}>
        <TouchableOpacity style={style.itemContainer}>
          <Icon
            name={'share-variant-outline'}
            color={'white'}
            size={25}
            style={{paddingBottom: 10}}
          />
          <TextSubTitle fontSize={12} title="Share" />
        </TouchableOpacity>
      </View>
      <View style={style.itemContainer}>
        <TouchableOpacity
          style={style.itemContainer}
          disabled={downloadLoading}
          onPress={() => {
            setDownloadLoading(!downloadLoading);
            setTimeout(() => {
              setDownloadLoading(false);
            }, 5000);
          }}>
          {downloadLoading ? (
            <ActivityIndicator style={{paddingBottom: 15}} />
          ) : (
            <Icon
              name={'download-outline'}
              color={'white'}
              size={25}
              style={{paddingBottom: 10}}
            />
          )}
          <TextSubTitle fontSize={12} title="Download" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  itemContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ShareContent;
