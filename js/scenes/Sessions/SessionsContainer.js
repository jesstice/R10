import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Sessions from './Sessions';
import {
  ActivityIndicator
} from 'react-native';
import { fetchSessionData } from '../../redux/modules/schedule';

class SessionsContainer extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // this.props.dispatch(fetchSessionData());
  }

  render() {
    if (!this.props.sessionData) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Sessions 
          sessionData={this.props.sessionData}
        />
      );
    }
  }

  static propTypes = {
    sessionData: PropTypes.shape({
      location: PropTypes.string,
      title: PropTypes.string,
      start_time: PropTypes.number,
      description: PropTypes.string,
      speaker: PropTypes.string
    })
  }
}

function mapStateToProps(state) {
  return {
    data: state.session.scheduleData,
    loading: state.session.loading,
  }
}

export default connect(mapStateToProps)(SessionsContainer);