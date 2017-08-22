import React, { Component } from 'react';
import PropTypes from 'prop-types';

import About from './About';
import {
  ActivityIndicator
} from 'react-native';

class AboutContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    let endpoint = "https://r10app-95fea.firebaseio.com/code_of_conduct.json";
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

  static propTypes = {

  }
  
  render() {
    if (this.state.isLoading) {
      return (
       <ActivityIndicator animating={true} size="small" color="black" />
      );
     } else {
      return (
        <About 
          conduct={this.state.data}
        />
      );
     }
  }
}

export default AboutContainer;