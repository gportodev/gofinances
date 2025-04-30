import { StyleSheet } from 'react-native';
import { Fonts } from '../../../constants/fonts';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    padding: 18,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  title: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.shape,
  },
});
