import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Speaker from './Speaker';
import {
  ActivityIndicator,
  Linking
} from 'react-native';

class SpeakerContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    let endpoint = "https://r10app-95fea.firebaseio.com/speakers.json";
    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
      })
      .catch(error => console.log(`Error fetching JSON: ${error}`));
  }

  componentDidUpdate() {
    if ( this.state.data && this.state.isLoading ) {
      this.setState({ isLoading: false });
    }
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


  static propTypes = {

  }
  
  render() {
    if (this.state.isLoading) {
      return (
       <ActivityIndicator animating={true} size="small" color="black" />
      );
     } else {
      return (
        <Speaker 
          speakerData={this.state.data}
          handleLink={this.handleLink}
        />
      );
     }
  }
}

export default SpeakerContainer;