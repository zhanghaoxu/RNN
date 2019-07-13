/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import HomeHeader from "./components/HomeHeader";
import HomeMain from "./components/HomeMain";
import { getCommunityAllList } from "src/apis/base";
class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
    };
  }
  render() {
    const headerTitle = this.state.title;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ecf0f1"
        }}
      >
        <HomeHeader title={headerTitle} />
        <HomeMain />
      </View>
    );
  }
}

export default HomeScreen;
