import React from 'react';
import PropTypes from 'prop-types';
import { 
  ScrollView,
} from 'react-native';
import ScheduleList from '../../components/ScheduleList/';

const Schedule = ({ scheduleData, pushSession, faveSessions }) => {
  return (
    <ScrollView>
      <ScheduleList
        scheduleData={scheduleData}
        pushSession={pushSession}
        faveSessions={faveSessions}
      />
    </ScrollView>
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
  }),
  pushSession: PropTypes.func,
  faveSessions: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default Schedule;