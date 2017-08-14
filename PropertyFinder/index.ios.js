/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

// import { AppRegistry } from 'react-native';

// import PropertyFinder from './PropertyFinder';

// AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
} from 'react-native';

import SearchPage from './SearchPage';

class PropertyFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
    marginTop: 65,
  },
  container: {
    flex: 1,
},
});

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinder);
