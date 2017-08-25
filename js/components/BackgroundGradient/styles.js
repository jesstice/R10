import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden'
  }
});