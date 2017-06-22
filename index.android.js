/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import { AppRegistry, Image, View } from 'react-native';
 class Picture extends Component {
   render() {
     return (
       <Image source={this.props.pic} style={{width: 400, height: 200}}/>
     );
   }
 }
 export default class Pictures extends Component {
   render() {
     let pic1 = {
       uri: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/19145884_10211228744652465_1508890654774567987_n.jpg?oh=2cee0d6d955e10191e4351c13cb9fa4e&oe=59DE8669'
     };
     let pic2 = {
       uri: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/18897_10205429954486335_5410535146248325801_n.jpg?oh=e021b8d7ff66cad6fe080ee571466385&oe=59DAB977'
     };
     return (
             <View style={{alignItems: 'center'}}>
               <Picture pic={pic1} />
               <Picture pic={pic2} />
             </View>
           );
   }
 }
 // skip this line if using Create React Native App
 AppRegistry.registerComponent('AwesomeProject', () => Pictures );
