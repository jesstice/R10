import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  shape: {
    flex: 0,
    borderRadius: 50,
    overflow: 'hidden'
  },
  text: {
    padding: 10,
    backgroundColor: 'transparent',
    color: 'white',
    fontFamily: typography.fontMainLight,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});