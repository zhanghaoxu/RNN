import MyScreen from "./MyScreen";
import { connect } from "react-redux";

import { getUserInfoHttp } from "src/store/actions/Global";
import { getMyRewardHttp, getDakaMyHttp } from "src/store/actions/My";

let MyScreenContainer = connect(state => ({
  myState: state.my,
  globalState: state.global,
  getUserInfoHttp,
  getMyRewardHttp,
  getDakaMyHttp
}))(MyScreen);

export default MyScreenContainer;
