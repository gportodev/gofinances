import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.shape,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 24,
    borderRadius: 5,
    borderLeftWidth: 5,
    marginBottom: 8,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
  amount: {
    fontFamily: Fonts.regular,
    fontSize: 15,
  },
});
