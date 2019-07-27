/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { BackHandler, Button, View, PushNotificationIOS } from "react-native";
import { WebView } from "react-native-webview";
import WebViewHeader from "./components/WebViewHeader";
import injectedJavaScript from "./injectedJavaScript";
var PushNotification = require("react-native-push-notification");
// ...
class WebViewScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      canGoBack: false,
      title: "",
      shareInfo: {}
    };
  }

  setTitle(title) {
    this.setState({
      title
    });
  }

  pushNotification(opt) {
    console.log("start push config");
    console.log(PushNotification.configure);
    console.log(PushNotification.localNotification);
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log("TOKEN:", token);
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log("NOTIFICATION:", notification);

        // process the notification

        // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },

      // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
      senderID: "YOUR GCM (OR FCM) SENDER ID",

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       */
      requestPermissions: true
    });
    PushNotification.localNotification({
      foreground: false, // BOOLEAN: If the notification was received in foreground or not
      userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
      message: "My Notification Message", // STRING: The notification message
      data: {} // OBJECT: The push data
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
    let shareInfo = this.state.shareInfo;
    return (
      <View style={{ flex: 1 }}>
        <WebViewHeader title={title} shareInfo={shareInfo} />
        <Button title="推送" onPress={this.pushNotification.bind(this)} />
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
