import { createStackNavigator } from "react-navigation-stack";
// MyStack
import MyScreen from "@/pages/My";
import MyStackDetailScreen from "@/pages/My/Subs/Detail";
import WebView from "@/pages/WebView";
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
