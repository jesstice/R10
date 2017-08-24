import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Session from './Session';
import {
  ActivityIndicator
} from 'react-native';
import { fetchSpeakerData } from '../../redux/modules/session';
import { goToSpeaker } from '../../navigation/navigationHelpers';
import { createFave, deleteFave } from '../../config/models';
class SessionContainer extends Component {

  componentDidMount() {
    const { speaker } = this.props.sessionData;
    this.props.dispatch(fetchSpeakerData(speaker));
  }

  pushSpeakerScene = (speakerData) => {
    goToSpeaker(speakerData);
  }

  addToFave = (sessionId) => {
    createFave(sessionId);
  }

  removeFave = (sessionId) => {
    deleteFave(sessionId)
  }

  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Session
          sessionData={this.props.sessionData}
          speakerData={this.props.data}
          removeFave={this.removeFave}
          pushSpeaker={this.pushSpeakerScene}
          createFave={this.addToFave}
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
    }),
    loading: PropTypes.bool.isRequired,
    // data: PropTypes.shape({
    //     bio: PropTypes.string,
    //     name: PropTypes.string,
    //     image: PropTypes.string,
    //     speaker_id: PropTypes.string,
    //     session: PropTypes.string,
    //     url: PropTypes.string
    // }),
    dispatch: PropTypes.func
  }
}

function mapStateToProps(state) {
  return {
    data: state.session.speakerData,
    loading: state.session.loading,
  }
}

export default connect(mapStateToProps)(SessionContainer);