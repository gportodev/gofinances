import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    width: 250,
    borderRadius: 5,
    paddingHorizontal: 23,
    paddingTop: 19,
    paddingBottom: 12,
    marginRight: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
  amount: {
    fontFamily: Fonts.medium,
    fontSize: 18,
    marginTop: 22,
  },
  lastTransaction: {
    fontFamily: Fonts.regular,
    fontSize: 12,
  },
});
