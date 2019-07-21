import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./item";
import { ActivityIndicator } from "react-native-paper";
export default class MyGroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groupList, isFetchingDakaMy } = this.props;

    let MyGroup = groupList.map((v, index) => {
      return <Item dakaStatus={v.dakaStatus} title={v.title} key={index} />;
    });

    let dataFetchingView = (
      <ActivityIndicator
        animating={true}
        color="#000"
        style={styles.activityIndicator}
      />
    );
    let fetchedView = MyGroup;
    let groupListView = isFetchingDakaMy ? dataFetchingView : fetchedView;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>我的小组（{groupList.length}）</Text>
        </View>
        <View>{groupListView}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 15,
    padding: 15
  },
  title: {
    fontSize: 20,
    color: "#2F2F34",
    fontWeight: "600",
    lineHeight: 40
  },
  activityIndicator: {
    flex: 1
  }
});
