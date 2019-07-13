import HomeScreen from "./HomeScreen";
import { connect } from "react-redux";

let HomeScreenContainer = connect(state => ({ home: state.home }))(HomeScreen);

export default HomeScreenContainer;
