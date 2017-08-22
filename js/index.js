import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './redux/store';
import { Router } from './navigation/routes';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation,
  NavigationStyles
} from '@expo/ex-navigation';
import {
  StatusBar
} from 'react-native';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store,
})

export default class R10 extends Component {
  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext}>
          <StatusBar barStyle="light-content" />
          <StackNavigation
            navigatorUID="root"
            initialRoute={Router.getRoute('navigationLayout')}
            defaultRouteConfig={{
              styles: { ...NavigationStyles.SlideVertical }
            }}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}
