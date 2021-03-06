/* eslint-disable react-native/no-inline-styles */
import { Appbar } from "react-native-paper";
import { StatusBar, View } from "react-native";
import React from "react";
class MyHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  _onSearch = () => console.warn("Searching");

  _onMore = () => console.warn("Shown more");

  render() {
    return (
      <View
        style={{
          shadowColor: null
        }}
      >
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={false}
          animated={true}
        />
        <Appbar.Header
          style={{
            backgroundColor: "#FEDC24"
          }}
          statusBarHeight={15}
        >
          <Appbar.Content title={this.props.title} />
          <Appbar.Action icon="cloud-search" onPress={this._onSearch} />
          <Appbar.Action icon="menu" onPress={this._onMore} />
        </Appbar.Header>
      </View>
    );
  }
}
export default MyHeader;
