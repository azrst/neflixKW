import {Platform, NativeModules} from 'react-native';
const {StatusBarManager} = NativeModules;

export const STATUSBAR_HEIGHT =
  //   Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
  StatusBarManager.HEIGHT;

export const interpolate = ({
  inputRange = [0, 370],
  outputRange = [0, 0.8],
  x = 0,
}) => {
  const minX = inputRange[0];
  const maxX = inputRange[1];
  const minY = outputRange[0];
  const maxY = outputRange[1];

  const slope = (maxY - minY) / (maxX - minX);
  //   console.log('slope : ', slope);
  const res = (x + minX) * (slope + minY);
  //   console.log('res : ', maxY);
  //   console.log('res : ', res);

  const result = maxY - res;
  //   console.log('result : ', res);
  if (result <= maxY) {
    return result;
  } else {
    return 0;
  }
};

export const queryParams = async (data = {}) => {
  const params = '?' + new URLSearchParams(data).toString();
  return params;
};
