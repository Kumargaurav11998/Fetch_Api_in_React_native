import {Dimensions, StyleSheet} from 'react-native';

import {color} from '../../utils/colors';

const {width, height} = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  label: {
    fontSize: 16,
    color: color.appcolor,
  },
  logo: {
    alignSelf: 'center',
    marginTop: '60%',
    fontSize: 18,
    fontWeight: '600',
    color: color.black,
  },
  txtinpute: {
    width: width - 50,
    alignSelf: 'center',
    marginTop: '5%',
  },
  btn: {
    alignSelf: 'center',
    marginTop: '5%',
  },
  loaderstyle: {
    marginTop: height / 1.5,
  },
  loadertxt: {
    color: color.appcolor,
    marginTop: height / 1.5,
  },
});
