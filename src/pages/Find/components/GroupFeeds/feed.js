import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { groupId, groupTitle, ugcList, groupMemberCount } = this.props;
    return (
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text>11</Text>
            <Text>22</Text>
          </View>
          <View style={styles.titleLeft}>
            <Button title="一起打卡" />
          </View>
        </View>
        <View style={styles.ugc} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  textContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {},
  titleLeft: {},
  titleRight: {},
  ugc: {}
});
