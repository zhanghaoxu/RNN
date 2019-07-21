import {
  View,
  Button,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl
} from "react-native";
import React from "react";
import MyBanner from "./MyBanner";
import MyUgc from "./MyUgc";
import MyGroupList from "./MyGroupList";

export default class MyMain extends React.Component {
  constructor(props) {
    super(props);
  }
  _onRefresh() {
    this.props.refresh();
  }
  render() {
    let {
      dakaStatistics,
      groupList,
      ugcList,
      todayAmount,
      totalAmount,
      userInfo,
      isFetchingDakaMy
    } = this.props;
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={this._onRefresh.bind(this)}
          />
        }
      >
        <View style={style.container}>
          <MyBanner
            dakaStatistics={dakaStatistics}
            totalAmount={totalAmount}
            todayAmount={todayAmount}
            userInfo={userInfo}
          />
          <MyUgc ugcList={ugcList} isFetchingDakaMy={isFetchingDakaMy} />
          <MyGroupList
            groupList={groupList}
            isFetchingDakaMy={isFetchingDakaMy}
          />
        </View>
      </ScrollView>
    );
  }
}

let style = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 20
  }
});
