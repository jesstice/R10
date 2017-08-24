import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import {
  ActivityIndicator
} from 'react-native';
import realm from '../../config/models';
import { fetchScheduleData, getFaveSessions } from '../../redux/modules/schedule';
import { goToSession } from '../../navigation/navigationHelpers';

class ScheduleContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Schedule',
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchScheduleData());
    this.props.dispatch(getFaveSessions());
    realm.addListener('change', () => this.props.dispatch(getFaveSessions()));
  }

  pushSessionScene(item) {
    goToSession("schedule", item);
  }

  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return (
        <Schedule
          scheduleData={this.props.data}
          pushSession={this.pushSessionScene}
          faveSessions={this.props.faves}
        />
      );
    }
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.number.isRequired,
        data: PropTypes.arrayOf(
          PropTypes.shape({
            location: PropTypes.string,
            title: PropTypes.string,
            start_time: PropTypes.number,
            description: PropTypes.string,
            session_id: PropTypes.string,
            speaker: PropTypes.string
          })
        )}
      )
    )
  }

}

function mapStateToProps(state) {
  return {
    data: state.schedule.scheduleData,
    loading: state.schedule.loading,
    faves: state.schedule.faves
  }
}


export default connect(mapStateToProps)(ScheduleContainer);