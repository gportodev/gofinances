import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    borderRadius: 5,
    paddingVertical: 17,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  amount: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    marginTop: 2,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 19,
  },
  category: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  categoryName: {
    fontSize: 14,
    color: colors.text,
  },
  date: {
    fontSize: 14,
    color: colors.text,
  },
});
