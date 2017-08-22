import { StyleSheet } from 'react-native';
import { colors } from '../../config/styles';

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
    fontSize: 20,
    fontWeight: 'bold'
  },
  subheading: {
    marginTop: 10,
    marginBottom: 10,
    color: colors.purple
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