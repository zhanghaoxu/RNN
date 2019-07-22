import React, { Component } from "react";
import { BackHandler, Button, View } from "react-native";
import { WebView } from "react-native-webview";
import WebViewHeader from "./components/WebViewHeader";
// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false,
      title: "容器"
    };
  }
  static navigationOptions = {
    headerLeft: (
      <Button
        onPress={() => console.warn("This is a button!")}
        title="Info"
        color="#000"
      />
    )
  };
  render() {
    let title = this.state.title;
    return (
      <View>
        <WebViewHeader title={title} />
        <WebView
          ref={myWeb => (this.webView = myWeb)}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          source={{ uri: "http://www.baidu.com" }}
        />
      </View>
    );
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }
  onNavigationStateChange(navState) {
    this.setState({
      canGoBack: navState.canGoBack
    });
  }

  handleBackPress = () => {
    console.warn("1");
    if (this.state.canGoBack) {
      this.refWeb.goBack();
      console.warn("2");
    } else {
      this.props.navigation.goBack(null);
      console.warn("3");
    }
    return true;
  };
}

export default WebViewScreen;
