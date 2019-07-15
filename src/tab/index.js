import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/AntDesign";

// HomeStack
import HomeScreen from "../pages/Home";
import HomeStackDetailScreen from "../pages/Home/Subs/Detail";
import HomeStackBlogScreen from "../pages/Home/Subs/Blog";

// MyStack
import MyScreen from "../pages/My";
import MyStackDetailScreen from "../pages/My/Subs/Detail";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    HomeDetail: HomeStackDetailScreen,
    HomeBlog: HomeStackBlogScreen
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const MyStack = createStackNavigator({
  My: MyScreen,
  MyDetail: MyStackDetailScreen
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    My: MyStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = "home";
        } else if (routeName === "My") {
          iconName = "user";
        }
        return <Icon name={iconName} size={23} color={tintColor} />;
      }
    }),

    backBehavior: "none",
    tabBarOptions: {
      activeBackgroundColor: "#6200ee",
      inactiveBackgroundColor: "#6200ee",
      activeTintColor: "#fff",
      inactiveTintColor: "grey"
    }
  }
);

export default TabNavigator;
