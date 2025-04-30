import { StyleSheet } from 'react-native';
import { Fonts } from '../../../constants/fonts';
import colors from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    width: '48%',

    borderStyle: 'solid',
    borderColor: colors.text,
    borderRadius: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  icon: {
    fontSize: 24,
    marginRight: 12,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 14,
  },
});
