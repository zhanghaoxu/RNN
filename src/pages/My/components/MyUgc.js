import React from "react";
import { View, Text, StyleSheet } from "react-native";
import UgcList from "@/pages/Find/components/GroupFeeds/ugc";
import { ActivityIndicator } from "react-native-paper";
export default class MyUgc extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { ugcList, isFetchingDakaMy } = this.props;
    let dataFetchingView = (
      <ActivityIndicator
        animating={true}
        color="#000"
        style={styles.activityIndicator}
      />
    );
    let fetchedView = <UgcList ugcList={ugcList} />;
    let ugcListView = isFetchingDakaMy ? dataFetchingView : fetchedView;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.leftText}>我的打卡日记</Text>
          <Text style={styles.rightText}>查看更多</Text>
        </View>
        {ugcListView}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff"
  },
  title: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 15
  },
  leftText: {
    color: "#2F2F34",
    fontSize: 20,
    fontWeight: "600"
  },
  rightText: {
    fontSize: 13,
    color: "#0092fe"
  },
  activityIndicator: {
    flex: 1
  }
});
