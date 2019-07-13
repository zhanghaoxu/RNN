import { Header } from "react-native-elements";
import { StatusBar, View } from "react-native";
import HeaderMenu from "src/components/Headers/HeaderMenu";
import HeaderShare from "src/components/Headers/HeaderShare";
import React from "react";
class HomeHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={false}
          animated={true}
        />
        <Header
          leftComponent={<HeaderMenu />}
          centerComponent={{ text: this.props.title, style: { color: "#fff" } }}
          rightComponent={<HeaderShare />}
        />
      </View>
    );
  }
}
export default HomeHeader;
