import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
  TouchableOpacity,
  Animated
} from 'react-native';
import { styles } from './styles';

class ConductItem extends Component {
  constructor() {
    super();

    this.state = {
      display: false,
      spin: new Animated.Value(0)
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental 
      && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  spinItemBullet = () => {
    this.state.spin.setValue(0);

    Animated.timing(
      this.state.spin,
      { toValue: 1, duration: 300 }
    ).start();
  }

  expandItem = () => {
    this.spinItemBullet();
    LayoutAnimation.easeInEaseOut();
    this.setState({ display: !this.state.display })
  } 

  render() {
    let spin = this.state.spin.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })

    let animatedStyle = {
      transform: [
        { rotate: spin }
      ]
    }

    return(
      <View>
        <TouchableOpacity onPress={this.expandItem}>
          <View style={styles.titleContainer}>
            <Animated.Text style={[styles.subheading, animatedStyle]}>{this.state.display ? "-" : "+"}</Animated.Text>
            <Text style={[styles.subheading, styles.title]}>{this.props.itemData.title}</Text>
          </View>
        </TouchableOpacity>
        <View>
          {this.state.display && <Text style={styles.content}>{this.props.itemData.description}</Text>}
        </View>
      </View>
    );
  }
}

ConductItem.propTypes = {
  itemData: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
}

export default ConductItem;