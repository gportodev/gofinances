import { StatusBar, StyleSheet } from 'react-native';
import { Fonts } from '../../constants/fonts';
import colors from '../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: (StatusBar?.currentHeight || 10) * 2,
    width: '100%',
    backgroundColor: colors.primary,
  },
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    fontFamily: Fonts.medium,
    color: colors.shape,
    fontSize: 30,
    textAlign: 'center',
    marginTop: 45,
  },
  signInTitle: {
    fontFamily: Fonts.regular,
    color: colors.shape,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 67,
  },
  footer: {
    width: '100%',
    flex: 1,
    backgroundColor: colors.secondary,
  },
  footerWrapper: {
    marginTop: -30,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
  },
});
