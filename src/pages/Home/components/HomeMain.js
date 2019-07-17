import { View, Button, Text, StyleSheet } from "react-native";
import React from "react";
import TotalDakaCount from "./TotalDakaCount";
import CardList from "./CardList";
export default class HomeMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { joinedList } = this.props;
    return (
      <View style={style.container}>
        <TotalDakaCount totalDakaCount={20} />
        <CardList cardList={joinedList} />
      </View>
    );
  }
}

let style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  }
});
