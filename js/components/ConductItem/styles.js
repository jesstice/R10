import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  titleContainer: {
    marginTop: 10,
    marginBottom: 10,
    flex: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    paddingLeft: 5
  },
  subheading: {
    color: colors.purple,
    fontFamily: typography.fontMain,
    fontWeight: 'bold'
  },
  content: {
    color: colors.mediumGrey,
    fontFamily: typography.fontMainLight,
    fontSize: 12
  }
});