/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import FindHeader from "./components/FindHeader";
import FindMain from "./components/FindMain";
import baseConfig from "src/config/baseConfig";

class FindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "发现"
    };
  }

  componentDidMount() {
    const { getCommunityListHttp, dispatch } = this.props;

    this.getFeedList();
    dispatch(getCommunityListHttp());
  }
  getFeedList() {
    const { getFeedListHttp, dispatch } = this.props;

    dispatch(getFeedListHttp());
  }
  render() {
    const headerTitle = this.state.title;
    const { findState } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: baseConfig.baseColor
        }}
      >
        <FindHeader title={headerTitle} />
        <FindMain
          updateFeedList={this.getFeedList.bind(this)}
          communityList={findState.communityList}
          isFetchingCommunityList={findState.isFetchingCommunityList}
          feedList={findState.feedList}
          isFetchingFeedList={findState.isFetchingFeedList}
        />
      </View>
    );
  }
}

export default FindScreen;