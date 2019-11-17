import React from "react";
import { View, StyleSheet } from "react-native";
import UserInfo from "./userInfo";
import UserScore from "./userScore";
import UserDakaInfo from "./userDakaInfo";
import baseConfig from "@/config/baseConfig";
export default class MyBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { userInfo, todayAmount, totalAmount, dakaStatistics } = this.props;
    return (
      <View style={styles.container}>
        <UserInfo userInfo={userInfo} />
        <UserScore todayAmount={todayAmount} totalAmount={totalAmount} />
        <UserDakaInfo dakaStatistics={dakaStatistics} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 20,
    backgroundColor: baseConfig.baseColor
  }
});
