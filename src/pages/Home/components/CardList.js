import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Swiper from "react-native-swiper";
export default class CardList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { cardList } = this.props;
    return (
      <View style={styles.wrapper}>
        <Swiper
          style={{
            flex: 1
          }}
          showsButtons={false}
        >
          <View style={styles.slide}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10
  },

  text: {
    color: "#000",
    fontSize: 30
  }
});
