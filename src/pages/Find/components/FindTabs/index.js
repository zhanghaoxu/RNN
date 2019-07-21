import React from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import Tab from "./tab";
import { ActivityIndicator } from "react-native-paper";
import baseConfig from "src/config/baseConfig";
export default class FindTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCommunityId: 1
    };
  }

  handleSelect(x, id) {
    this.$scroll.scrollTo({
      x,
      animated: true
    });
    this.setState({
      activeCommunityId: id
    });

    this.props.updateFeedList(id);
  }

  render() {
    let communityList = this.props.communityList;
    let activeCommunityId = this.state.activeCommunityId;

    let TabList = communityList.map(v => {
      let isActive = activeCommunityId === parseInt(v.id, 10);
      return (
        <Tab
          key={v.id}
          id={v.id}
          name={v.name}
          isActive={isActive}
          handleSelect={this.handleSelect.bind(this)}
        />
      );
    });

    let dataFetchingView = <ActivityIndicator animating={true} color="#fff" />;

    let dataFetchedView = (
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal={true}
        ref={scroll => {
          this.$scroll = scroll;
        }}
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
    height: 50,
    backgroundColor: baseConfig.baseColor
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
