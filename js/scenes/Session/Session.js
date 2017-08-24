import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import Button from '../../components/Button/';
import Moment from 'moment';
import { styles } from './styles';

const Session = ({ sessionData, speakerData, removeFave, pushSpeaker, createFave }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.subheading}>{sessionData.location}</Text>
        <Text style={styles.heading}>{sessionData.title}</Text>
        <Text style={styles.time} >{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.description}>{sessionData.description}</Text>
        <Text style={styles.subheading}>Presented By:</Text>
      </View>
      <View style={styles.speakerInfo}>
        <TouchableOpacity onPress={() => pushSpeaker(speakerData)}>
          <Image
            style={styles.image}
            source={{ uri: speakerData.image }}
          />
        </TouchableOpacity>
        <Text style={styles.speakerName}>{speakerData.name}</Text>
      </View>
      <TouchableOpacity onPress={() => createFave(sessionData.session_id)}>
        <Button
          buttonText="Add to Faves"
        />
      </TouchableOpacity>
    </View>
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
  pushSpeaker: PropTypes.func
}

export default Session;