import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  speakerContainer: {
    padding: 20,
    height: '100%',
    width: '100%',
    backgroundColor: 'black'
  },
  icon: {
    backgroundColor: 'transparent'
  },
  title: {
    color: 'white',
    fontFamily: typography.fontMain,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    marginTop: 20,
    padding: 5,
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 75/2
  },
  contentContainer: {
   padding: 10
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});