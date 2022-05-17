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
  header: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: '3%',
    color: color.appcolor,
    fontWeight: '500',
  },
  cardoutersty: {
    borderRadius: 10,
    elevation: 3,
    marginBottom: 3,
  },
  cardInndersty: {
    flexDirection: 'row',
  },
  txt: {
    color: color.appcolor,
    fontSize: 16,
  },
  emptytxt: {
    textAlign: 'center',
    marginTop: height / 2,
    color: color.appcolor,
  },
});
