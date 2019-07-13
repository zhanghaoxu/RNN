import React from "react";
import { Icon } from "react-native-elements";
export default class HeaderShare extends React.Component {
  render() {
    return (
      <Icon
        name="share"
        color="#fff"
        underlayColor="transparent"
        onPress={() => {
          console.warn("show share");
        }}
      />
    );
  }
}
