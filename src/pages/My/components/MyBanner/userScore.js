import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class UserScore extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todayAmount, totalAmount } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.totalText}>学分：{totalAmount}</Text>
          <Text style={styles.todayText}>今天获得{todayAmount}学分</Text>
        </View>
        <View style={styles.right}>
          <Image
            source={require("../imgs/reward-enter.png")}
            style={styles.img}
          />
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 13,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 15
  },
  totalText: {
    fontSize: 12,
    color: "#2F2F34"
  },
  todayText: {
    fontSize: 17,
    color: "#2F2F34",
    fontWeight: "600"
  },
  left: {
    justifyContent: "center"
  },
  right: {},
  img: {
    width: 80,
    height: 60
  }
});
