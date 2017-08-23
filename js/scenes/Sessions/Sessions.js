import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  Image,
  Button
} from 'react-native';
import Moment from 'moment';
import { styles } from './styles';

const Sessions = ({ sessionData, speakerData, linkToWikipedia }) => {
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
        <Image
          style={styles.image}
          source={{ uri: speakerData.image }}
        />
        <Text>{speakerData.name}</Text>
      </View>
      <Button
        onPress={() => linkToWikipedia(speakerData.url)}
        style={styles.button}
        title="Remove from Faves"
        accessibilityLabel="Remove session from faves"
      />
    </View>
  );
}

Sessions.propTypes = {
  sessionData: PropTypes.shape({
    location: PropTypes.string,
    title: PropTypes.string,
    start_time: PropTypes.number,
    description: PropTypes.string,
    speaker: PropTypes.string
  })
}

export default Sessions;