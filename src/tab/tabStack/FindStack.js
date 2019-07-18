import { createStackNavigator } from "react-navigation";
// FindStack
import FindScreen from "src/pages/Find";
const FindStack = createStackNavigator(
  {
    Find: FindScreen
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
