import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 0,
    alignItems: 'center'
  },
  logo: {
    marginTop: 30,
    marginBottom: 20,
  },
  border: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGrey
  },
  contentContainer: {
   paddingTop: 10,
   flex: 0
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    color: colors.mediumGrey,
    fontFamily: typography.fontMainLight,
    fontSize: 12
  },
  conductContainer: {
    paddingRight: 5
  }
});