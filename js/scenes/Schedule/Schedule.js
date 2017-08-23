import React from 'react';
import PropTypes from 'prop-types';
import { 
  View,
} from 'react-native';
import ScheduleList from '../../components/ScheduleList/';
import { styles } from './styles';

const Schedule = ({ scheduleData, popSession }) => {
  return (
    <View>
      <ScheduleList scheduleData={scheduleData} popSession={popSession} />
    </View>
  );
}

Schedule.propTypes = {
  scheduleData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.number.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          location: PropTypes.string,
          title: PropTypes.string,
          start_time: PropTypes.number,
          description: PropTypes.string,
          session_id: PropTypes.string,
          speaker: PropTypes.string
        })
      )}
    )
  ),
  renderItem: PropTypes.func,
  data: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
  })
}

export default Schedule;