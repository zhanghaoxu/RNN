/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";

import Spinner from "react-native-loading-spinner-overlay";

class Loading extends Component {
  constructor(props) {
    super(props);
    let defaultOptions = {
      textContent: "加载中..."
    };
    this.state = {
      loadingUserCount: 0,
      options: Object.assign({}, defaultOptions)
    };
  }
  show() {
    this.setState({
      loadingUserCount: this.state.loadingUserCount + 1
    });
  }
  hide() {
    this.setState({
      loadingUserCount: this.state.loadingUserCount - 1
    });
  }
  render() {
    let loadingUserCount = this.state.loadingUserCount;
    let options = this.state.options;
    return (
      <Spinner
        animation={"fade"}
        visible={loadingUserCount > 0}
        textContent={options.textContent}
        textStyle={{
          color: "#fff"
        }}
      />
    );
  }
}
export default Loading;
