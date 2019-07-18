import FindScreen from "./FindScreen";
import { connect } from "react-redux";

import { getCommunityListHttp, getFeedListHttp } from "src/store/actions/Find";

let FindScreenContainer = connect(state => ({
  findState: state.find,
  getCommunityListHttp: getCommunityListHttp,
  getFeedListHttp: getFeedListHttp
}))(FindScreen);

export default FindScreenContainer;
