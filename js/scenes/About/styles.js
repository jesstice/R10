import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  contentContainer: {
   padding: 10
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontFamily: typography.fontMain,
    fontSize: 20,
    fontWeight: 'bold'
  },
  subheading: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.purple,
    fontFamily: typography.fontMain
  },
  content: {
    fontFamily: typography.fontMainLight
  },
  logo: {
    marginTop: 30,
    marginBottom: 20,
  },
  border: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGrey
  }
});