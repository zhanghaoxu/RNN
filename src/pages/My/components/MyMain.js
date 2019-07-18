import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";

export default class MyMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { joinedList } = this.props;
    return (
      <View style={style.container}>
        <Text>哈哈ha</Text>
      </View>
    );
  }
}

let style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  }
});
