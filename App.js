/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { Provider } from "react-redux";
import { createAppContainer } from "react-navigation";
import TabNavigator from "./src/tab";
import { BackHandler, View } from "react-native";
import Toast from "react-native-easy-toast";
import Loading from "./src/components/Loading";
import SplashScreen from "react-native-splash-screen";

import store from "./src/store";
import firebase from "react-native-firebase";

let Navigation = createAppContainer(TabNavigator);
// Render the app container component with the provider around it
export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  handleBackPress = () => {
    this.navigator && console.warn(this.navigator.state);
    this.$toast && this.$toast.show("hello world!");

    // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
    // Typically you would use the navigator here to go to the last state.

    // if (!this.onMainScreen()) {
    //   this.goBack();
    //   return true;
    // }
    return false;
  };

  onMainScreen() {
    return true;
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Navigation
            ref={nav => {
              this.navigator = nav;
            }}
          />
          <Toast
            ref={toast => {
              Component.prototype.$toast = toast;
            }}
          />
          <Loading
            ref={loading => {
              Component.prototype.$loading = loading;
            }}
          />
        </View>
      </Provider>
    );
  }
}
