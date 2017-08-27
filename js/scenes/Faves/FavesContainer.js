import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Faves from './Faves';
import {
  ActivityIndicator
} from 'react-native';
import realm from '../../config/models';
import { fetchFaveData } from '../../redux/modules/faves';
import { goToSession } from '../../navigation/navigationHelpers';

class FavesContainer extends Component {

  static route = {
    navigationBar: {
      title: 'Faves',
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchFaveData())
    realm.addListener('change', () => this.props.dispatch(fetchFaveData()))
  }

  pushSessionScene(item) {
    goToSession("faves", item);
  }

  render() {
    if (this.props.loading) {
      return (
        <ActivityIndicator animating={true} size="small" color="black" />
      );
    } else {
      return(
        <Faves 
          favesData={this.props.data}
          pushSession={this.pushSessionScene}
          faves={this.props.faves}
        />
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    loading: state.faves.loading,
    data: state.faves.favesData,
    faves: state.schedule.faves
  }
}

FavesContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func,

}


export default connect(mapStateToProps)(FavesContainer);