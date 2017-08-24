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
  speakerInfo: {
    width: '100%',
    paddingLeft: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row'
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
    marginBottom: 10,
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
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 25
  },
  speakerName: {
    fontFamily: typography.fontMain,
    fontSize: 16,
    fontWeight: 'bold',
  },
  border: {
    width: '90%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.lightGrey
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    color: 'white'
  }
});