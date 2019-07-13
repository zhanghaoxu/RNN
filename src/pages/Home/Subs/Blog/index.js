import React, { Component } from "react";
import { BackHandler, Button } from "react-native";
import { WebView } from "react-native-webview";

// ...
class BlogComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false
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
    return (
      <WebView
        ref={myWeb => (this.refWeb = myWeb)}
        onNavigationStateChange={this.onNavigationStateChange.bind(this)}
        source={{ uri: "https://www.baidu.com" }}
      />
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

export default BlogComponent;
