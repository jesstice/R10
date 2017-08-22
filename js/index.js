import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router } from './navigation/routes';
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';

export default class R10 extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation
          navigatorUID="root"
          initialRoute={Router.getRoute('about')}
        />
      </NavigationProvider>
    );
  }
}
