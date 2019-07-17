/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View, Button } from "react-native";
import HomeHeader from "./components/HomeHeader";
import HomeMain from "./components/HomeMain";

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Home"
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
          backgroundColor: "#FEDC24"
        }}
      >
        <HomeHeader title={headerTitle} />
        <HomeMain joinedList={globalState.joinedList} />
      </View>
    );
  }
}

export default HomeScreen;
