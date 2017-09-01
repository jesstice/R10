import React from 'react';
import {
  ActivityIndicator,
  View
} from 'react-native';
import { styles } from './styles';

const Loader = () => (
  <View style={styles.loaderContainer}>
    <ActivityIndicator 
      animating={true}
      size="small"
      color="black" 
    />
  </View>
)

export default Loader;