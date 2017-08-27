import React from 'react';
import PropTypes from 'prop-types';
import { 
  Platform,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import FaveButton from '../../components/Button/';
import Moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Session = ({ sessionData, speakerData, pushSpeaker, isFaved, updateSessionFave }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.subheading}>{sessionData.location}</Text>
        {isFaved ?
          <Icon
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            color="red"
            backgroundColor="transparent"
            size={20}
          />
        : null
        }
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{sessionData.title}</Text>
        <Text style={styles.time} >{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.description}>{sessionData.description}</Text>
        <Text style={styles.subheading}>Presented By:</Text>
      </View>
      {speakerData ?
        <View style={styles.speakerInfo}>
          <TouchableOpacity onPress={() => pushSpeaker(speakerData)}>
            <Image
              style={styles.image}
              source={{ uri: speakerData.image }}
            />
          </TouchableOpacity>
          <Text style={styles.speakerName}>{speakerData.name}</Text>
        </View>
      : null
      }
      <View style={styles.border} />
      <TouchableOpacity onPress={() => updateSessionFave(sessionData.session_id)}>
        <FaveButton
          buttonText={isFaved ? "Remove from Faves" : "Add to Faves" }
        />
      </TouchableOpacity>
    </ScrollView>
  );
}

Session.propTypes = {
  sessionData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string
  }),
  speakerData: PropTypes.shape({
    bio: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    speaker_id: PropTypes.string,
    session: PropTypes.string,
    url: PropTypes.string
  }),
  removeFave: PropTypes.func,
  pushSpeaker: PropTypes.func,
  isFaved: PropTypes.bool.isRequired,
  updateSessionFave: PropTypes.func
}

export default Session;