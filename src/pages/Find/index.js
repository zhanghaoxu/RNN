/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Text, View, Button } from "react-native";

class FindScreen extends Component {
  static navigationOptions = {
    title: "Find",
    headerLeft: (
      <Button
        onPress={() => console.warn("This is a button!")}
        title="Info"
        color="#000"
      />
    )
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
        <Text>Find</Text>
        <Button
          title="Go to HomeDetail"
          onPress={() => this.props.navigation.push("MyDetail")}
        />
      </View>
    );
  }
}

export default FindScreen;
