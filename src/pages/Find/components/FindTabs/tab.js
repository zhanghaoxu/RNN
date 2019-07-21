import React from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
  }
  layoutHandler(e) {
    this.$offsetX = e.nativeEvent.layout.x;
  }
  render() {
    return (
      <TouchableWithoutFeedback
        ref={touchElement => {
          this.$touchElement = touchElement;
        }}
        onPress={e => {
          console.log(this.$offsetX + 10);
          this.props.handleSelect(this.$offsetX, this.props.id);
        }}
      >
        <View
          style={styles.textContainer}
          onLayout={this.layoutHandler.bind(this)}
        >
          <Text style={this.props.isActive ? styles.activeText : styles.text}>
            {this.props.name}
          </Text>
        </View>
      </TouchableWithoutFeedback>
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
    fontSize: 14,
    fontWeight: "700",
    color: "rgba(0,0,0,1)"
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0,0,0,0.5)"
  }
});
