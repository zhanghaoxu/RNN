/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import baseConfig from "src/config/baseConfig";

class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "我的"
    };
  }

  componentDidMount() {
    const { getJoinedListHttp, dispatch } = this.props;
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
        <MyHeader title={headerTitle} />
        <MyMain joinedList={globalState.joinedList} />
      </View>
    );
  }
}

export default MyScreen;
