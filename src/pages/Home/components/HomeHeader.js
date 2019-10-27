/* eslint-disable react-native/no-inline-styles */
import { StatusBar, View } from "react-native";
import React from "react";
class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  _onSearch = () => console.warn("Searching");

  _onMore = () => console.warn("Shown more");
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={false}
          animated={true}
        />
      </View>
    );
  }
}
export default HomeHeader;
