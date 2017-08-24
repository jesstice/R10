import React, { Component } from 'react';
import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem as DrawerItem,
} from '@expo/ex-navigation';
import { Text, StyleSheet } from 'react-native';
import { Router } from './routes';
import Icon from 'react-native-vector-icons/Ionicons';
import BackgroundGradient from '../components/BackgroundGradient/';
import { colors, typography } from '../config/styles';

const defaultRouteConfig = {
  navigationBar: {
    tintColor: 'white',
    titleStyle: {
      fontFamily: typography.fontMain
    },
    renderBackground: () => (
      <BackgroundGradient colors={[colors.red, colors.purple]} />
    )
  },
}

class NavigationLayout extends Component {

  static route = {
    navigationBar: {
      visible: false,
    }
  }

  renderIcon(iconName, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;
    return <Icon name={iconName} size={28} color={color} />
  }

  renderTitle(title, isSelected) {
    const color = isSelected ? colors.purple : colors.mediumGrey;
    const titleStyle = {
      paddingLeft: 10,
      color: color,
      fontSize: 18,
      fontFamily: typography.fontMain
    }
    return <Text style={titleStyle}>{title}</Text>
  }

  render() {
    return (
      <DrawerNavigation
        id="main"
        initialItem="schedule"
        drawerWidth={300}
      >
        <DrawerItem
          id="schedule"
          selectedStyle={styles.selectedItemStyle}
          renderIcon={(isSelected) => this.renderIcon("md-calendar", isSelected)}
          renderTitle={(isSelected) => this.renderTitle("Schedule", isSelected)}
        >
          <StackNavigation
            id="schedule"
            initialRoute={Router.getRoute('schedule')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id="faves"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={(isSelected) => this.renderTitle("Faves", isSelected)}
          renderIcon={(isSelected) => this.renderIcon("ios-heart", isSelected)}
        >
          <StackNavigation
            id="faves"
            initialRoute={Router.getRoute('faves')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
        <DrawerItem
          id="about"
          selectedStyle={styles.selectedItemStyle}
          renderTitle={(isSelected) => this.renderTitle("About", isSelected)}
          renderIcon={(isSelected) => this.renderIcon("ios-information-circle", isSelected)}
        >
          <StackNavigation
            id="about"
            initialRoute={Router.getRoute('about')}
            defaultRouteConfig={defaultRouteConfig}
          />
        </DrawerItem>
      </DrawerNavigation>
    );
  }
}

const styles = StyleSheet.create({
  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },
});


export default NavigationLayout;