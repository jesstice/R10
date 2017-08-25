import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './styles';

const BackgroundGradient = ({ colors }) => {
  return (
    <LinearGradient 
      colors={colors} 
      style={styles.gradient} 
      end={{x: 1.0, y: 0.1}}
      start={{x: 0.1, y: 1.0}}
    />
  );
}

BackgroundGradient.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default BackgroundGradient;