import React from "react";
import { View, StyleSheet } from "react-native";
import Feed from "./feed";
import { ActivityIndicator } from "react-native-paper";

export default class GroupFeeds extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let feedList = this.props.feedList.feeds;
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

    let dataFetchingView = (
      <ActivityIndicator
        animating={true}
        color="#000"
        style={styles.activityIndicator}
      />
    );
    let dataFetchedView = feedListView;
    let GroupFeedsView = isFetchingFeedList
      ? dataFetchingView
      : dataFetchedView;
    return <View style={styles.wrapper}>{GroupFeedsView}</View>;
  }
}
let styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: 10
  },
  activityIndicator: {
    flex: 1
  }
});
