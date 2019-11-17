import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import UgcList from "./ugc";
import baseConfig from "@/config/baseConfig";
export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { groupId, groupTitle, groupMemberCount } = this.props;
    let ugcList = this.props.ugcList ? this.props.ugcList : [];
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <View style={styles.titleLeft}>
            <Text style={styles.titleMain}>{groupTitle}</Text>

            <Text style={styles.titleDes}>
              <Icon name="addusergroup" size={15} />
              <Text> 成员{groupMemberCount}人</Text>
            </Text>
          </View>
          <View style={styles.titleRight}>
            <Button
              style={styles.titleButton}
              contentStyle={{
                height: 24
              }}
              color="#121212"
            >
              一起打卡
            </Button>
          </View>
        </View>
        <UgcList ugcList={ugcList.slice(0, 3)} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10
  },
  title: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  },
  titleMain: {
    fontSize: 15,
    lineHeight: 31,
    fontWeight: "600",
    color: "#2F2F34"
  },
  titleDes: {
    fontSize: 12,
    fontWeight: "500",
    color: "#B2B2B2"
  },
  titleButton: {
    backgroundColor: baseConfig.baseColor,
    borderRadius: 15
  }
});
