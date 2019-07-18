import MyScreen from "./MyScreen";
import { connect } from "react-redux";

import { getJoinedListHttp } from "src/store/actions/Global";

let MyScreenContainer = connect(state => ({
  homeState: state.home,
  globalState: state.global,
  getJoinedListHttp: getJoinedListHttp
}))(MyScreen);

export default MyScreenContainer;
