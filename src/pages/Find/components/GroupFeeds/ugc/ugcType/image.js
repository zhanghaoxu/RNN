import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default class ImageType extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let src = this.props.src;

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: src
          }}
          style={styles.img}
        />
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
  img: {
    width: 105,
    height: 105
  }
});
