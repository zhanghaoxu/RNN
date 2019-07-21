import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import React from "react";
import FindBanner from "./FindBanner";
import FindTabs from "./FindTabs";
import GroupFeeds from "./GroupFeeds";
import baseConfig from "src/config/baseConfig";
export default class FindMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {
      communityList,
      isFetchingCommunityList,
      feedList,
      isFetchingFeedList
    } = this.props;
    return (
      <ScrollView
        contentContainerStyle={isFetchingFeedList ? { flex: 1 } : {}}
        stickyHeaderIndices={[1]}
      >
        <FindBanner />
        <FindTabs
          communityList={communityList}
          isFetchingCommunityList={isFetchingCommunityList}
          updateFeedList={this.props.updateFeedList}
        />
        <View style={style.list}>
          <Button
            title="创建打卡小组"
            color="#2F2F34"
            style={style.createGroupButton}
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
  createGroupButton: {
    borderColor: baseConfig.baseColor,
    borderWidth: 1,
    backgroundColor: "#fff"
  }
});
