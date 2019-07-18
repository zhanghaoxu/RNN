import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default class VideoType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let src = this.props.src;

    return (
      <View style={styles.container}>
        <Image source={{ uri: src }} style={{ width: 105, height: 105 }} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    width: 105,
    height: 105,
    backgroundColor: "#ddd"
  }
});
