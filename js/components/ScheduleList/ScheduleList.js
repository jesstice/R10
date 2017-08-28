import React from 'react';
import PropTypes from 'prop-types';
import { 
  Platform,
  SectionList,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const ScheduleList = ({ scheduleData, pushSession, faveSessions }) => {
  return(
    <SectionList
      renderItem={({item}) => {
        return (
          <TouchableOpacity onPress={() => pushSession(item)}>
            <View style={styles.itemContainer}>
              <Text style={styles.heading}>{item.title}</Text>
              <Text style={styles.location}>{item.location}</Text>
              {faveSessions.find(faveId => faveId === item.session_id) ?
                <Icon
                  name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
                  color="red"
                  backgroundColor="transparent"
                  size={14}
                />
                : null
              }
            </View>
          </TouchableOpacity>
        )}
      }
      renderSectionHeader={(item) => {
        return <Text style={styles.sectionHeading}>{Moment.unix(item.section.title).format('h:mm A')}</Text>
      }}
      sections={scheduleData}
      keyExtractor={item => item.session_id}
      ItemSeparatorComponent={() => <View style={styles.border} />}
    />
  )

}

ScheduleList.propTypes = {
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
  pushSession: PropTypes.func,
  faveSessions: PropTypes.arrayOf(
    PropTypes.string
  )
}

export default ScheduleList;