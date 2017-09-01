import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import About from './About';
import Loader from '../../components/Loader/';
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

  render() {
    if (this.props.loading) {
      return (
        <Loader />
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

AboutContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
}

export default connect(mapStateToProps)(AboutContainer);