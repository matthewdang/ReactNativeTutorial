import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

class Picture extends Component {
  render() {
      let pic = {
        uri: this.props.name
      };
      return (
        <Image source={pic} style={{width: 400, height: 200}}/>
      );
  }
}

export default class LotsofPictures extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Picture name='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/10613148_1244376775587972_376261394166346151_n.jpg?oh=a2b9df10e01874648fb5c8c9aaeaac9a&oe=59C847F0'/>
        <Picture name='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/19145884_10211228744652465_1508890654774567987_n.jpg?oh=2cee0d6d955e10191e4351c13cb9fa4e&oe=59DE8669'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsofPictures);
