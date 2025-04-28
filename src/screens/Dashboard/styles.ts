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
    height: 200,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  userWrapper: {
    width: '100%',
    paddingHorizontal: 24,
    paddingVertical: 30,
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
    marginTop: 100,
  },
  highlightCardsContent: {
    paddingHorizontal: 24,
  },
  transactions: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 60,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.regular,
    marginBottom: 16,
  },
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
