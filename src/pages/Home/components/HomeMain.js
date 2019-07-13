import { View, Button } from "react-native";
import React from "react";
import { createGroup } from "src/apis/base";

export default class HomeMain extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Button
          title="Learn More"
          onPress={() => {
            createGroup()
              .then(data => {
                console.warn(data);
              })
              .catch(e => {
                console.warn(e);
              });
          }}
        />
      </View>
    );
  }
}
