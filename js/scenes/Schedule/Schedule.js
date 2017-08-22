import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  FlatList,
} from 'react-native';

import { styles } from './styles';

const Schedule = ({ scheduleData }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={scheduleData}
        renderItem={({ item }) => 
          <View style={styles.contentContainer}>
            <Text>{item.start_time}</Text>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.subheading}>{item.location}</Text>
          </View>
        }
        keyExtractor={item => item.id}
      />
    </View>
  );
}

Schedule.propTypes = {
  scheduleData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
  }),
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
  })
}

export default Schedule;