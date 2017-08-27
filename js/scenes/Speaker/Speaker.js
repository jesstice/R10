import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import SpeakerButton from '../../components/Button/';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Speaker = ({ speakerData, handleLink, popSpeakerScene }) => {
  return (
    <ScrollView contentContainerStyle={styles.speakerContainer}>
      <View style={styles.titleContainer}>
        <Icon.Button 
          name="ios-close"
          style={styles.icon}
          backgroundColor="transparent"
          size={40}
          onPress={() => popSpeakerScene()} />
        <Text style={styles.title}>About the Speaker</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: speakerData.image}}
        />
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{speakerData.name}</Text>
          <Text style={styles.content}>{speakerData.bio}</Text>
        </View>
        <TouchableOpacity onPress={() => handleLink(speakerData.url)}>
          <SpeakerButton
            buttonText="Read More on Wikipedia"
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

Speaker.propTypes = {
  speakerData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.url
  }),
  handleLink: PropTypes.func.isRequired,
  popSpeakerScene: PropTypes.func
}

export default Speaker;