/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import HomeHeader from "./components/HomeHeader";
import HomeMain from "./components/HomeMain";
import baseConfig from "@/config/baseConfig";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "打卡"
    };
  }

  componentDidMount() {
    const { getJoinedListHttp, dispatch } = this.props;
    console.log("home mounted");
    dispatch(getJoinedListHttp());
  }

  render() {
    const headerTitle = this.state.title;
    const { globalState } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: baseConfig.baseColor
        }}
      >
        <HomeMain joinedList={globalState.joinedList} />
      </View>
    );
  }
}

export default HomeScreen;
