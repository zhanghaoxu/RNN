import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
import baseConfig from "@/config/baseConfig";;
export default class FindBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Swiper showsButtons={false} autoplay={true}>
          <View style={styles.slide}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: 125,
    backgroundColor: baseConfig.baseColor
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 8
  },

  text: {
    color: "#000",
    fontSize: 30
  }
});
