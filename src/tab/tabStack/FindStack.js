import { createStackNavigator } from "react-navigation";
// FindStack
import FindScreen from "src/pages/Find";
import WebView from "src/pages/WebView";
const FindStack = createStackNavigator(
  {
    Find: FindScreen,
    WebView: WebView
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "发现"
    }
  }
);
export default FindStack;
