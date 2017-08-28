import React from 'react';
import PropTypes from 'prop-types';
import { 
  View,
} from 'react-native';
import ScheduleList from '../../components/ScheduleList/';

const Faves = ({ favesData, pushSession, faves }) => {
  return (
    <View>
      <ScheduleList
        scheduleData={favesData}
        pushSession={pushSession}
        faveSessions={faves}
      />
    </View>
  );
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