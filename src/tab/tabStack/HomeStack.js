import { createStackNavigator } from "react-navigation";
// HomeStack
import HomeScreen from "src/pages/Home";
import HomeStackDetailScreen from "src/pages/Home/Subs/Detail";
import HomeStackBlogScreen from "src/pages/Home/Subs/Blog";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    HomeDetail: HomeStackDetailScreen,
    HomeBlog: HomeStackBlogScreen
  },
  {
    mode: "modal",
    headerMode: "none",
    navigationOptions: {
      tabBarLabel: "打卡"
    }
  }
);

export default HomeStack;
