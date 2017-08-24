import { Platform } from 'react-native';

/*
Global Styles
*/

export const colors = {
  mediumGrey: '#999999',
  lightGrey: '#e6e6e6',
  blue: '#8797D6',
  purple: '#9963ea',
  red: '#cf392a'
}

export const typography = {
  baseSize: 16,
  ...Platform.select({
    ios: {
      fontFamily: 'Montserrat'
    },
    android: {
      fontFamily: 'Montserrat-Regular'
    }
  }),
  fontMainLight: 'Montserrat-Light'
}