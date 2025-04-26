import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    width: 300,
    borderRadius: 5,
    paddingHorizontal: 23,
    paddingTop: 19,
    paddingBottom: 42,
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
  icon: {
    fontSize: 40,
  },
  amount: {
    fontFamily: Fonts.medium,
    fontSize: 32,
    // color: type === 'total' ? colors.shape : colors.text_dark,
    marginTop: 32,
  },
  lastTransaction: {
    fontFamily: Fonts.regular,
    fontSize: 12,
    // color: type === 'total' ? colors.shape : colors.text,
  },
});
