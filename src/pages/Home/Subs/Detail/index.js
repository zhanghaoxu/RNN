/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, View } from "react-native";

class HomeDetailScreen extends Component {
  static navigationOptions = {
    title: "Home Detail"
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>Home Detail</Text>
      </View>
    );
  }
}

export default HomeDetailScreen;
