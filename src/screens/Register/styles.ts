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
  form: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
    padding: 24,
  },
  fields: {
    marginBottom: 16,
  },
  transactionTypes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 16,
  },
});
