import { StyleSheet } from 'react-native';
import { Fonts } from '../../../constants/fonts';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
  },
  text: {
    fontSize: 14,
    fontFamily: Fonts.regular,
    color: colors.attention,
    margin: 7,
  },
});
