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
    navigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (navigation.state.index > 0) {
        tabBarVisible = false;
      }

      return {
        tabBarVisible,
        tabBarLabel: "发现"
      };
    }
  }
);
export default FindStack;
