import { combineReducers } from "redux";
import home from "./Home";
import my from "./My";
import global from "./Global";

export default combineReducers({
  home,
  my,
  global
});
