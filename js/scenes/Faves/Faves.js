import React from 'react';
import PropTypes from 'prop-types';
import { 
  View,
  Text
} from 'react-native';
import ScheduleList from '../../components/ScheduleList/';

import { styles } from './styles';

const Faves = ({ favesData, pushSession, faves }) => {
  if ( favesData.length ) {
    return (
      <View>
        <ScheduleList
          scheduleData={favesData}
          pushSession={pushSession}
          faveSessions={faves}
        />
      </View>
    )
  } else {
    return (
      <View style={styles.favesContainer}>
        <Text style={styles.favesText}>Looks like you have no faves yet! Check out the scheduled sessions.</Text>
     </View>
    );
  }
}

Faves.propTypes = {
  pushSession: PropTypes.func,
  favesData: PropTypes.arrayOf(
    PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          title: PropTypes.string,
          start_time: PropTypes.number,
          description: PropTypes.string,
          speaker: PropTypes.string
        })
      ),
      title: PropTypes.number
    })
  ),
  faves: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default Faves;