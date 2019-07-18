import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Feed from "./feed";
import { ActivityIndicator } from "react-native-paper";

export default class GroupFeeds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let feedList = this.props.feedList.feeds;
    console.warn(feedList.map);
    let isFetchingFeedList = this.props.isFetchingFeedList;

    let feedListView = feedList.map((v, index) => {
      return (
        <Feed
          key={index}
          groupId={v.groupId}
          groupTitle={v.groupTitle}
          groupMemberCount={v.groupMemberCount}
          ugcList={v.ugcList}
        />
      );
    });

    let dataFetchingView = <ActivityIndicator animating={true} color="#fff" />;
    let dataFetchedView = (
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {feedListView}
      </ScrollView>
    );
    let GroupFeedsView = isFetchingFeedList
      ? dataFetchingView
      : dataFetchedView;
    return <View>{GroupFeedsView}</View>;
  }
}
let styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30
  }
});
