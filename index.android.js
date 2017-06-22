import React, { Component } from 'react';
import { AppRegistry, Image, View } from 'react-native';

class Picture extends Component {
  render() {
      let pic = {
        uri: this.props.name
      };
      return (
        <Image source={pic} style={{width: 193, height: 110}}/>
      );
  }
}

export default class LotsofPictures extends Component {
  render() {
    return (
      <View style={{alignItems:'center'}}>
        <Picture name='https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/10613148_1244376775587972_376261394166346151_n.jpg?oh=a2b9df10e01874648fb5c8c9aaeaac9a&oe=59C847F0'/>
        <Picture name='https://cdn-webimages.wimages.net/04f6ec54bc5d52188178724de37dd278a8e393-wide-thumbnail.jpg?v=4'/>
      </View>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => LotsofPictures);
