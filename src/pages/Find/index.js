import FindScreen from "./FindScreen";
import { connect } from "react-redux";

import {
  getCommunityListHttp,
  getFeedListHttp,
  updateActiveCommunityIdHandler
} from "src/store/actions/Find";

let FindScreenContainer = connect(state => ({
  findState: state.find,
  getCommunityListHttp: getCommunityListHttp,
  getFeedListHttp: getFeedListHttp,
  updateActiveCommunityIdHandler: updateActiveCommunityIdHandler
}))(FindScreen);

export default FindScreenContainer;
