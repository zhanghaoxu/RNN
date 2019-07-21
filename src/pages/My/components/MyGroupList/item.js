import React from "react";
import { View, Text, StyleSheet } from "react-native";
const STATE_TEXT = {
  "0": "未打卡",
  "1": "已打卡",
  "2": "已结束",
  "3": "已退出"
};
export default class MyGroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { dakaStatus, title } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>{title}</Text>
        <Text style={styles.bottomText}>{STATE_TEXT[dakaStatus]}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10
  },
  topText: {
    fontWeight: "500",
    color: "#2F2F34",
    fontSize: 15
  },
  bottomText: {
    fontSize: 12,
    color: "#B2B2B2"
  }
});
