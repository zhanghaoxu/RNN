/* eslint-disable react-native/no-inline-styles */
import { View, Text } from "react-native";
import React from "react";
export default class TotalDakaCount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { totalDakaCount } = this.props;
    return (
      <View
        style={{
          height: 40
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            lineHeight: 35,
            color: "rgba(47, 47, 52, 1)",
            fontWeight: "600"
          }}
        >
          你已打卡{totalDakaCount}次，加油！
        </Text>
      </View>
    );
  }
}
