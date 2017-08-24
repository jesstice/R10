import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  shape: {
    width: '65%',
    margin: 10,
    padding: 10,
    borderRadius: 30,
    backgroundColor: colors.purple
  },
  text: {
    color: 'white',
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  gradient: {
    flex: 1,
    height: '100%',
    width: '100%'
  }
});