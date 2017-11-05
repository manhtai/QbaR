/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera';


export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = { detected: false };
  }

  readBarCode = (e) => {
    if (this.state.detected) return;

    this.setState({ detected: true });

    Alert.alert(
      '',
      e.data,
      [{ text: 'Ok', onPress: () => this.setState({ detected: false }) }],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          onBarCodeRead={(e) => this.readBarCode(e)}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture}>{ this.state.detected ? 'Detected' : 'Waiting...' }</Text>
        </Camera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
