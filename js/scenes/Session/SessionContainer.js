import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Session from './Session';
import {
  ActivityIndicator
} from 'react-native';
import { fetchSpeakerData, updateFaveStatus } from '../../redux/modules/session';
import { goToSpeaker } from '../../navigation/navigationHelpers';
import { createFave, deleteFave } from '../../config/models';
class SessionContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Session',
    }
  }

  componentDidMount() {
    const { speaker, session_id } = this.props.sessionData;
    const { faves } = this.props;
    if (faves.find(faveId => faveId === session_id)) {
      this.props.dispatch(updateFaveStatus(true))
    }
    this.props.dispatch(fetchSpeakerData(speaker));
  }

  pushSpeakerScene = (speakerData) => {
    goToSpeaker(speakerData);
  }

  updateSessionFave = (sessionId) => {
    if (this.props.isFaved) {
      deleteFave(sessionId)
      this.props.dispatch(updateFaveStatus(false))
    } else {
      createFave(sessionId);
      this.props.dispatch(updateFaveStatus(true))
    }
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
          pushSpeaker={this.pushSpeakerScene}
          isFaved={this.props.isFaved}
          updateSessionFave={this.updateSessionFave}
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
      speaker: PropTypes.string,
      session_id: PropTypes.string,
    }),
    loading: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        bio: PropTypes.string,
        name: PropTypes.string,
        image: PropTypes.string,
        speaker_id: PropTypes.string,
        session: PropTypes.string,
        url: PropTypes.string
    }),
    dispatch: PropTypes.func,
    isFaved: PropTypes.bool.isRequired,
    faves: PropTypes.arrayOf(
      PropTypes.string
    )
  }
}

function mapStateToProps(state) {
  return {
    data: state.session.speakerData,
    loading: state.session.loading,
    faves: state.schedule.faves,
    isFaved: state.session.faveStatus
  }
}

export default connect(mapStateToProps)(SessionContainer);