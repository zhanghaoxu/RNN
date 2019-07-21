import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default class UserDakaInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      maxSeriesCount,
      dakaRatio,
      dakaGroupCount,
      totalDakaCount
    } = this.props.dakaStatistics;
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.topText}>{maxSeriesCount}</Text>
          <Text style={styles.bottomText}>最高连续打卡</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.topText}>{totalDakaCount}</Text>
          <Text style={styles.bottomText}>总打卡</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.topText}>{dakaGroupCount}</Text>
          <Text style={styles.bottomText}>参与小组</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.topText}>{dakaRatio}</Text>
          <Text style={styles.bottomText}>打卡率</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 23
  },
  item: {
    justifyContent: "center",
    alignItems: "center"
  },
  topText: {
    fontSize: 21,
    fontWeight: "600",
    color: "#2F2F34"
  },
  bottomText: {
    fontSize: 11,
    color: "#57575A"
  }
});
