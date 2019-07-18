import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import FindBanner from "./FindBanner";
import FindTabs from "./FindTabs";
import GroupFeeds from "./GroupFeeds";
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
      <View style={style.container}>
        <FindBanner />
        <FindTabs
          communityList={communityList}
          isFetchingCommunityList={isFetchingCommunityList}
        />
        <View style={style.list}>
          <Button title="创建打卡小组" />
          <GroupFeeds
            feedList={feedList}
            isFetchingFeedList={isFetchingFeedList}
          />
        </View>
      </View>
    );
  }
}

let style = StyleSheet.create({
  container: {
    flex: 1
  },
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F6F7F9"
  }
});
