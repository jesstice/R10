import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Speaker from './Speaker';
import {
  ActivityIndicator,
  Linking
} from 'react-native';
import { popSpeaker } from '../../lib/navigationHelpers';

class SpeakerContainer extends Component {

  popSpeakerScene() {
    popSpeaker()
  }

  handleLink(link) {
    Linking.canOpenURL(link).then(supported => {
      if (supported) {
        Linking.openURL(link);
      } else {
        console.log('Don\'t know how to open URI: ' + link);
      }
    });
  }
  
  render() {
    if (!this.props.speakerData) {
      return (
       <ActivityIndicator animating={true} size="small" color="black" />
      );
     } else {
      return (
        <Speaker 
          speakerData={this.props.speakerData}
          handleLink={this.handleLink}
          popSpeakerScene={this.popSpeakerScene}
        />
      );
     }
  }
}

SpeakerContainer.propTypes = {
  speakerData: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.url
  })
}

export default SpeakerContainer;