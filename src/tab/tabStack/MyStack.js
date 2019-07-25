import { createStackNavigator } from "react-navigation";
// MyStack
import MyScreen from "src/pages/My";
import MyStackDetailScreen from "src/pages/My/Subs/Detail";
import WebView from "src/pages/WebView";
const MyStack = createStackNavigator(
  {
    My: MyScreen,
    MyDetail: MyStackDetailScreen,
    WebView
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
        tabBarLabel: "我的"
      };
    }
  }
);

export default MyStack;
