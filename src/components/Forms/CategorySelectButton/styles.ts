import { StyleSheet } from 'react-native';
import colors from '../../../constants/colors';
import { Fonts } from '../../../constants/fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    paddingVertical: 18,
    paddingHorizontal: 16,
    backgroundColor: colors.shape,
  },
  category: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
});
