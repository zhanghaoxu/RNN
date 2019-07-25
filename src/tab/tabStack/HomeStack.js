import { createStackNavigator } from "react-navigation";
// HomeStack
import HomeScreen from "src/pages/Home";
import HomeStackDetailScreen from "src/pages/Home/Subs/Detail";
import HomeStackBlogScreen from "src/pages/Home/Subs/Blog";
import WebView from "src/pages/WebView";
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    HomeDetail: HomeStackDetailScreen,
    HomeBlog: HomeStackBlogScreen,
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
        tabBarLabel: "打卡"
      };
    }
  }
);

export default HomeStack;
