import { StyleSheet } from 'react-native';
import { Fonts } from '../../../constants/fonts';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  input: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 18,

    fontFamily: Fonts.regular,
    fontSize: 14,

    color: colors.text_dark,
    backgroundColor: colors.shape,
    borderRadius: 5,
    marginBottom: 8,
  },
});
