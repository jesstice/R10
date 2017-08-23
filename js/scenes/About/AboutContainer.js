import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from './About';
import {
  ActivityIndicator
} from 'react-native';
import { fetchConductData } from '../../redux/modules/conduct';

class AboutContainer extends Component {

  static route = {
    navigationBar: {
      title: 'About',
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchConductData());
  }

  static propTypes = {
    loading: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    // conduct: PropTypes.arrayOf({
    //   PropTypes.shape({
    //     title: PropTypes.string,
    //   })
    // })
  }
  
  render() {
    if (this.props.loading) {
      return (
       <ActivityIndicator animating={true} size="small" color="black" />
      );
     } else {
      return (
        <About 
          conduct={this.props.data}
        />
      );
     }
  }
}

function mapStateToProps(state) {
  return {
    data: state.conduct.conductData,
    loading: state.conduct.loading,
  }
}

export default connect(mapStateToProps)(AboutContainer);