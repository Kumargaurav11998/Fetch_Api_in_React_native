import {Dimensions, StyleSheet} from 'react-native';

import {color} from '../../utils/colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.appcolor,
  },
  txts: {
    marginTop: height / 2,
    textAlign: 'center',
    fontSize: 20,
    color: color.white,
    fontWeight: '600',
  },
  avatarStyle: {
    resizeMode: 'contain',
  },
});
