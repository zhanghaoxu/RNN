import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Item from "./item";
export default class MyGroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { groupList } = this.props;

    let MyGroup = groupList.map((v, index) => {
      return <Item dakaStatus={v.dakaStatus} title={v.title} key={index} />;
    });
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>我的小组（{groupList.length}）</Text>
        </View>
        <View>{MyGroup}</View>
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
  }
});
