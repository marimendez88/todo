/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
      <TouchableOpacity onPress= {this.props.onToggleAllComplete}>
      <Text style={styles.toggleIcon}>{String.fromCharCode(10003)}</Text>
      </TouchableOpacity>
      <TextInput
                 value={this. props.value}
                 onChangeText={this.props.onChange}
                 onSubmitEditing={this.props.onAddItem}
                 placeholder="Que es lo que hay que hacer"
                 blurOnSubmit={false}
                 returnKeyType="done"
                 style={styles.input}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input:{
    flex:1,
    height:50,
    marginLeft: 16,
  },
  toggleIcon:{
    fontSize: 30,
    color: "#CCC"
  },
  header:{
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
