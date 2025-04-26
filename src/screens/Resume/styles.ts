import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import { Fonts } from '../../constants/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 113,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 19,
  },
  title: {
    fontFamily: Fonts.regular,
    fontSize: 18,
    color: colors.shape,
  },
  content: {
    flex: 1,
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
  },
  monthSelect: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  month: {
    fontFamily: Fonts.regular,
    fontSize: 20,
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  warning: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  warningIcon: {
    fontSize: 150,
    color: colors.primary,
  },
  warningText: {
    fontFamily: Fonts.regular,
    fontSize: 20,
    color: colors.text_dark,
  },
});
