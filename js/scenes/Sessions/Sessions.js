import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import { styles } from './styles';

const Sessions = ({ sessionData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.subheading}>{sessionData.location}</Text>
        <Text style={styles.heading}>{sessionData.title}</Text>
        <Text>{sessionData.start_time}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>{sessionData.description}</Text>
        <Text>Presented By:</Text>
        <Text>{sessionData.speaker}</Text>
      </View>
    </View>
  );
}

Sessions.propTypes = {
  sessionData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string
  })
}

export default Sessions;