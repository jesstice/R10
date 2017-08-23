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
    this.props.dispatch(fetchSessionData());
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
  }
  
  render() {
    if (this.props.loading) {
      return (
       <ActivityIndicator animating={true} size="small" color="black" />
      );
     } else {
      return (
        <Sessions 
          sessionData={this.props.data}
        />
      );
     }
  }
}

function mapStateToProps(state) {
  return {
    data: state.session.scheduleData,
    loading: state.session.loading,
  }
}

export default connect(mapStateToProps)(SessionsContainer);