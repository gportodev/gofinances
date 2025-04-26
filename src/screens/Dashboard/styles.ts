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
    height: 300, // aprox. RFPercentage(42)
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  userWrapper: {
    width: '100%',
    paddingHorizontal: 24,
    // marginTop: getStatusBarHeight() + 28,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photo: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
  user: {
    marginLeft: 17,
  },
  text: {
    color: colors.shape,
    fontSize: 18,
    fontFamily: Fonts.bold,
  },
  icon: {
    color: colors.secondary,
    fontSize: 24,
  },
  highlightCards: {
    width: '100%',
    position: 'absolute',
    marginTop: 140, // aprox. RFPercentage(20)
  },
  highlightCardsContent: {
    paddingHorizontal: 24,
  },
  transactions: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 80, // aprox. RFPercentage(12)
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    marginBottom: 16,
  },
  transactionListContent: {
    // paddingBottom: getBottomSpace(),
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
