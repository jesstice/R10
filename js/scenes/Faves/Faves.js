import React from 'react';
import PropTypes from 'prop-types';
import { 
  Text,
  View,
  FlatList,
  Image
} from 'react-native';

import { styles } from './styles';

const Faves = () => {
  return (
    // <View style={styles.container}>
    //   <Image
    //     style={styles.logo}
    //     source={require('../../assets/images/r10_logo.png')}
    //   />
    //   <View style={styles.border} />
    //   <View style={styles.contentContainer}>
    //     <Text style={styles.heading}>Date & Venue</Text>
    //     <Text>The R10 Conference will take place on June 27, 2017 in Vancouver, BC.</Text>
    //   </View>
    //   <View style={styles.contentContainer}>
    //     <Text style={styles.heading}>Code of Conduct</Text>
    //     <FlatList
    //       data={conduct}
    //       renderItem={({ item }) => 
    //         <View>
    //           <Text style={styles.subheading}>{item.title}</Text>
    //           <Text>{item.description}</Text>
    //         </View>}
    //       keyExtractor={item => item.id}
    //     />
    //   </View>
    // </View>
  );
}

Faves.propTypes = {

}

export default Faves;