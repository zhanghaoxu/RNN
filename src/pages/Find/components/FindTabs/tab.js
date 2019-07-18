import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={this.props.isActive ? styles.activeText : styles.text}>
          {this.props.name}
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,

    justifyContent: "center",
    alignItems: "center"
  },
  activeText: {
    fontSize: 16,
    fontWeight: "600",
    color: "rgba(0,0,0,0.9)"
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0,0,0,0.5)"
  }
});
