import React from 'react';
import PropTypes from 'prop-types';
import { 
  SectionList,
  View,
  Text
} from 'react-native';
import Moment from 'moment';
import { styles } from './styles';

const ScheduleList = ({ scheduleData }) => {

  return(
    <SectionList
      renderItem={({item}) => { 
        return (
          <View>
            <Text style={styles.heading}>{item.title}</Text>
            <Text style={styles.location}>{item.location}</Text>
          </View>
        )}
      }
      renderSectionHeader={(item) => {
        return <Text style={styles.sectionHeading}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      }}
      sections={scheduleData}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={() => <View style={styles.border} />}
    />
  )

}

SectionList.propTypes = {
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
  )
}

export default ScheduleList;