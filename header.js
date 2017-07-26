/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
      <TextInput
      placeholder"¿Que es lo ahey hay que hacer?"
      blurOnSubmit={false}
      returnKeyType "done"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input:{
    flex:1,
    height:50
  }
});
