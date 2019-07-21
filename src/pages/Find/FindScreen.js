/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import FindHeader from "./components/FindHeader";
import FindMain from "./components/FindMain";

class FindScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerTitle: "发现"
    };
  }

  componentDidMount() {
    const { getCommunityListHttp, dispatch, findState } = this.props;

    this.getFeedList(findState.activeCommunityId);

    dispatch(getCommunityListHttp());
  }
  getFeedList(communityId) {
    const { updateActiveCommunityIdHandler, dispatch } = this.props;
    dispatch(updateActiveCommunityIdHandler(communityId));
  }

  render() {
    const { headerTitle } = this.state;
    const { findState } = this.props;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#F6F7F9"
        }}
      >
        <FindHeader title={headerTitle} />
        <FindMain
          updateFeedList={this.getFeedList.bind(this)}
          communityList={findState.communityList}
          isFetchingCommunityList={findState.isFetchingCommunityList}
          feedList={findState.feedList}
          isFetchingFeedList={findState.isFetchingFeedList}
          activeCommunityId={findState.activeCommunityId}
        />
      </View>
    );
  }
}

export default FindScreen;
