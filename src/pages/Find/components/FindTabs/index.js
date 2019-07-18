import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Tab from "./tab";
import { ActivityIndicator } from "react-native-paper";
export default class FindTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCommunityId: 1
    };
  }

  render() {
    let communityList = this.props.communityList;
    let activeCommunityId = this.state.activeCommunityId;

    let TabList = communityList.map(v => {
      let isActive = activeCommunityId === parseInt(v.id, 10);
      return <Tab key={v.id} name={v.name} isActive={isActive} />;
    });

    let dataFetchingView = <ActivityIndicator animating={true} color="#fff" />;

    let dataFetchedView = (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
      >
        {TabList}
      </ScrollView>
    );

    let findTabList = this.props.isFetchingCommunityList
      ? dataFetchingView
      : dataFetchedView;

    return <View style={styles.wrapper}>{findTabList}</View>;
  }
}
let styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    height: 50
  },
  contentContainer: {},
  textContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
    color: "rgba(0,0,0,0.5)"
  }
});
