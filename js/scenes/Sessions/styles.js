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
    fontSize: 25,
    fontFamily: typography.fontMain,
    fontWeight: 'bold'
  },
  subheading: {
    marginTop: 10,
    marginBottom: 5,
    color: colors.mediumGrey,
    fontFamily: typography.fontMain,
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: 18,
    lineHeight: 22
  },
  time: {
    marginTop: 5,
    marginBottom: 10,
    color: colors.red,
    fontFamily: typography.fontMain,
  },
  image: {
    height: 50,
    width: 50
  },
  border: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGrey
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 6,
    color: 'white'
  }
});