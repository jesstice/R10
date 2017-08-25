import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';
import ConductItem from '../../components/ConductItem/';

import { styles } from './styles';

const About = ({ conduct }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/r10_logo.png')}
        />
        <View style={styles.border} />
        <View style={styles.contentContainer}>
          <Text style={styles.content}>R10 is a conference that focuses on just about any topic related to dev.</Text>
          <Text style={styles.heading}>Date & Venue</Text>
          <Text style={styles.content}>The R10 Conference will take place on June 27, 2017 in Vancouver, BC.</Text>
          <Text style={styles.heading}>Code of Conduct</Text>
          <View style={styles.conductContainer}>
            {
              conduct.map((item) => {
                return <ConductItem itemData={item} key={item.title} />
              })
            }
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

About.propTypes = {
  conduct: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  ).isRequired
}

export default About;