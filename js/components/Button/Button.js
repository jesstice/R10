import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

import BackgroundGradient from '../BackgroundGradient/';
import { colors } from '../../config/styles';
import { styles } from './styles';

const Button = ({ buttonText }) => (

    <View style={styles.shape}>
      <BackgroundGradient colors={[colors.purple, colors.blue]} />
      <Text style={styles.text}>{buttonText}</Text>
    </View>
)

Button.propTypes = {
  buttonText: PropTypes.string
}

export default Button;