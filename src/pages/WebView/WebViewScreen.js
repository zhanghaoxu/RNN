/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { BackHandler, Button, View } from "react-native";
import { WebView } from "react-native-webview";
import WebViewHeader from "./components/WebViewHeader";
import injectedJavaScript from "./injectedJavaScript";
// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false,
      title: ""
    };
  }

  setTitle(title) {
    this.setState({
      title
    });
  }

  handlerH5Event(e) {
    let data = JSON.parse(e.nativeEvent.data);
    switch (data.type) {
      case "setTitle":
        this.setTitle(data.title);
        break;
      default:
        return;
    }
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
      <View style={{ flex: 1 }}>
        <WebViewHeader title={title} />
        <WebView
          ref={myWeb => (this.webView = myWeb)}
          injectedJavaScript={injectedJavaScript.toString()}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          onMessage={this.handlerH5Event.bind(this)}
          source={{ uri: "http://10.242.112.136:3000" }}
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
    if (this.state.canGoBack) {
      this.webView.goBack();
    } else {
      this.props.navigation.goBack(null);
    }
    return true;
  };
}

export default WebViewScreen;
