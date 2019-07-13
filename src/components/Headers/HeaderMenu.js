/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Icon } from "react-native-elements";
export default class HeaderMenu extends React.Component {
  render() {
    return (
      <Icon
        name="menu"
        color="#fff"
        underlayColor="transparent"
        onPress={() => {
          console.warn("show menu");
        }}
      />
    );
  }
}
