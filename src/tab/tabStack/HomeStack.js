import { createStackNavigator } from "react-navigation-stack";
// HomeStack
import HomeScreen from "@/pages/Home";
import HomeStackDetailScreen from "@/pages/Home/Subs/Detail";
import HomeStackBlogScreen from "@/pages/Home/Subs/Blog";
import WebView from "@/pages/WebView";
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
