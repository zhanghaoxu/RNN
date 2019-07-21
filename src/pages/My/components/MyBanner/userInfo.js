import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { nickName, avatarUrl } = this.props.userInfo;
    let imgSource;
    if (avatarUrl) {
      imgSource = { uri: avatarUrl };
    } else {
      imgSource = require("../imgs/mine.png");
    }

    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Image source={imgSource} style={styles.avatar} />
          <Text style={styles.name}>{nickName}</Text>
        </View>
        <View style={styles.right}>
          <Image source={require("../imgs/icon_fqa.png")} style={styles.icon} />
          <Image
            source={require("../imgs/icon_message.png")}
            style={styles.icon}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2F2F34"
  },
  avatar: {
    borderRadius: 60,
    width: 60,
    height: 60,
    marginRight: 5
  },
  icon: {
    width: 23,
    height: 20,
    marginLeft: 20
  },
  left: {
    flexDirection: "row",
    alignItems: "center"
  },
  right: {
    flexDirection: "row",
    alignItems: "center"
  }
});
