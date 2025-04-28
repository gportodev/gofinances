import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    width: '100%',
    height: 113,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 19,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    color: colors.shape,
  },
  category: {
    width: '100%',
    padding: 15,

    flexDirection: 'row',
    alignItems: 'center',
  },

  name: {
    fontSize: 14,
    fontFamily: Fonts.regular,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: colors.text,
  },
  footer: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
  },
  button: {
    width: '50%',
    padding: 18,
    margin: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonTitle: {
    fontSize: 14,
    fontFamily: Fonts.medium,
    color: colors.shape,
  },
});
