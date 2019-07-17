import HomeScreen from "./HomeScreen";
import { connect } from "react-redux";

import { getJoinedListHttp } from "src/store/actions/Global";

let HomeScreenContainer = connect(state => ({
  homeState: state.home,
  globalState: state.global,
  getJoinedListHttp: getJoinedListHttp
}))(HomeScreen);

export default HomeScreenContainer;
