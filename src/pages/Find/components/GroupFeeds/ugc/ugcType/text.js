import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TextType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let content = this.props.content;

    return (
      <View style={styles.container}>
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={5}>
          {content}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: 105,
    height: 105,
    backgroundColor: "#ddd"
  },
  text: {
    padding: 5,
    color: "#999999"
  }
});
