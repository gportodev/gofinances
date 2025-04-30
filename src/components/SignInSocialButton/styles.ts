import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: colors.shape,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16,
    gap: 10,
  },
  imageContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    borderRightWidth: 1,
    borderColor: colors.background,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
});
