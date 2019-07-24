/* eslint-disable react-native/no-inline-styles */
import React, { Component } from "react";
import { View } from "react-native";
import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import baseConfig from "src/config/baseConfig";

class MyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "我的"
    };
  }

  componentDidMount() {
    this._getData();
  }

  _getData() {
    const {
      dispatch,
      getDakaMyHttp,
      getMyRewardHttp,
      getUserInfoHttp
    } = this.props;
    dispatch(getUserInfoHttp());
    dispatch(getDakaMyHttp());
    dispatch(getMyRewardHttp());
  }

  render() {
    const headerTitle = this.state.title;
    const { globalState, myState } = this.props;

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: baseConfig.baseColor
        }}
      >
        <MyHeader title={headerTitle} />
        <MyMain
          isFetchingDakaMy={myState.isFetchingDakaMy}
          userInfo={globalState.userInfo}
          dakaStatistics={myState.dakaStatistics}
          groupList={myState.groupList}
          ugcList={myState.ugcList}
          todayAmount={myState.todayAmount}
          totalAmount={myState.totalAmount}
          refresh={this._getData.bind(this)}
        />
      </View>
    );
  }
}

export default MyScreen;
