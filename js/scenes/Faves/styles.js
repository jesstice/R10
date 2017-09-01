import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  favesContainer: {
    padding: 10,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  },
  favesText: {
    fontFamily: typography.fontMain,
    textAlign: 'center'
  }
});