import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import UgcItem from "./ugcItem";

export default class UgcList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { ugcList } = this.props;

    if (!ugcList) {
      ugcList = [];
    }
    let ugcListView = ugcList.map((v, index) => {
      return (
        <View key={index} style={styles.ugcItem}>
          <UgcItem ugc={v} />
        </View>
      );
    });
    return <View style={styles.container}>{ugcListView}</View>;
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    flex: 1,
    flexDirection: "row"
  },
  ugcItem: {
    marginRight: 6
  }
});
