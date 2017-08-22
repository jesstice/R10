import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  Image,
  Button
} from 'react-native';

import { styles } from './styles';

const Speaker = ({ speakerData, handleLink }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{uri: speakerData.image}}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.heading}>{speakerData.name}</Text>
        <Text>{speakerData.bio}</Text>
      </View>
      <Button
        onPress={() => handleLink(speakerData.url)}
        title="Reach More on Wikipedia"
        accessibilityLabel="Learn more on Wikipedia"
      />
    </View>
  );
}

Speaker.propTypes = {
  speakerData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.url
  }),
  handleLink: PropTypes.func.isRequired
}

export default Speaker;