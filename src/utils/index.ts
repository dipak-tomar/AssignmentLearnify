import {Dimensions, PixelRatio, Platform} from 'react-native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

const width = Math.round(Dimensions.get('window').width);
const scale = width / 375;

export const normalize = (size: number): number => {
  const newSize = size * scale;

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
