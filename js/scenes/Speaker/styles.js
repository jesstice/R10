import { StyleSheet } from 'react-native';
import { colors, typography } from '../../config/styles';

export const styles = StyleSheet.create({
  speakerContainer: {
    padding: 20,
    backgroundColor: 'black'
  },
  titleContainer: {
    marginTop: 20,
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  icon: {
    backgroundColor: 'transparent',
    // flexBasis: '45%',
  },
  title: {
    color: 'white',
    width: '85%',
    fontFamily: typography.fontMain,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  container: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
    flex: 0,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  contentContainer: {
   padding: 10
  },
  heading: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 24,
    fontFamily: typography.fontMain,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  content: {
    fontFamily: typography.fontMainLight,
    fontSize: 14
  }
});