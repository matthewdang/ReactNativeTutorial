/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
export default class HelloWorldApp extends Component {
  render () {
    return (
        <Text>Justin Leong Loves Tracey Chan</Text>
    );
  }
}
AppRegistry.registerComponent('AwesomeProject', () =>HelloWorldApp);
