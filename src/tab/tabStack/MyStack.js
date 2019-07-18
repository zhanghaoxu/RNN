import { createStackNavigator } from "react-navigation";
// MyStack
import MyScreen from "src/pages/My";
import MyStackDetailScreen from "src/pages/My/Subs/Detail";

const MyStack = createStackNavigator(
  {
    My: MyScreen,
    MyDetail: MyStackDetailScreen
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "我的"
    }
  }
);

export default MyStack;
