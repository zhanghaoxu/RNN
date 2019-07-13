import SplashScreen from "react-native-splash-screen";
import React, { Component } from "react";

export default class WelcomePage extends Component {
  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }
}
