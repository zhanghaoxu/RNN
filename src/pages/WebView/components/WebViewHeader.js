/* eslint-disable react-native/no-inline-styles */
import { Appbar } from "react-native-paper";
import { StatusBar, View } from "react-native";
import React from "react";
import Share from "react-native-share";
class WebViewHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  _onShare = () => {
    let { shareInfo } = this.props;
    Share.open({
      message: "A framework for building native apps using React",
      url: "http://facebook.github.io/react-native/",
      title: "This is a title",
      showAppsTOView: true
    })
      .then(this._showResult)
      .catch(error => console.warn(error));
  };

  render() {
    return (
      <View>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          hidden={false}
          animated={true}
        />
        <Appbar.Header
          style={{
            backgroundColor: "#bbb",
            height: 50
          }}
          statusBarHeight={15}
        >
          <Appbar.Content
            title={this.props.title}
            titleStyle={{ fontSize: 15 }}
          />
          <Appbar.Action
            icon="share"
            size={20}
            onPress={this._onShare.bind(this)}
          />
        </Appbar.Header>
      </View>
    );
  }
}
export default WebViewHeader;
