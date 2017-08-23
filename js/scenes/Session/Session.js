import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';
import Moment from 'moment';
import { styles } from './styles';

const Session = ({ sessionData, speakerData, removeFave, popSpeaker }) => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.subheading}>{sessionData.location}</Text>
        <Text style={styles.heading}>{sessionData.title}</Text>
        <Text style={styles.time} >{Moment.unix(sessionData.start_time).format('h:mm A')}</Text>
        <Text style={styles.description}>{sessionData.description}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text>Presented By:</Text>
        <TouchableOpacity onPress={() => popSpeaker(speakerData)}>
          <Image
            style={styles.image}
            source={{ uri: speakerData.image }}
          />
        </TouchableOpacity>
        <Text>{speakerData.name}</Text>
      </View>
      <Button
        onPress={() => removeFave()}
        style={styles.button}
        title="Remove from Faves"
        accessibilityLabel="Remove session from faves"
      />
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
  popSpeaker: PropTypes.func
}

export default Session;