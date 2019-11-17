import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import FindBanner from "./FindBanner";
import FindTabs from "./FindTabs";
import GroupFeeds from "./GroupFeeds";
import baseConfig from "@/config/baseConfig";
export default class FindMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false
    };
  }

  _onRefresh() {
    const { activeCommunityId } = this.props;

    this.props.updateFeedList(activeCommunityId);
  }

  render() {
    let {
      communityList,
      isFetchingCommunityList,
      feedList,
      isFetchingFeedList,
      activeCommunityId
    } = this.props;

    let { refreshing } = this.state;
    return (
      <ScrollView
        stickyHeaderIndices={[1]}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
        <FindBanner />
        <FindTabs
          communityList={communityList}
          activeCommunityId={activeCommunityId}
          isFetchingCommunityList={isFetchingCommunityList}
          updateFeedList={this.props.updateFeedList}
        />
        <View style={style.list}>
          <Button
            title="创建打卡小组"
            color="#2F2F34"
            style={style.createGroupButton}
            onPress={() => {
              this.props.navigation.push("WebView");
            }}
          >
            创建打卡小组
          </Button>
          <GroupFeeds
            feedList={feedList}
            isFetchingFeedList={isFetchingFeedList}
          />
        </View>
      </ScrollView>
    );
  }
}

let style = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F6F7F9"
  },
  scrollViewNoList: {
    flex: 1
  },
  createGroupButton: {
    borderColor: baseConfig.baseColor,
    borderWidth: 1,
    backgroundColor: "#fff"
  }
});
