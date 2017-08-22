import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import { styles } from './styles';

const Faves = () => {
  return (
    <View style={styles.container}>
      <Text>Faves go here!</Text>
    </View>
  );
}

Faves.propTypes = {

}

export default Faves;