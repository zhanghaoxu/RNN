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

// FindStack
import FindScreen from "../pages/Find";

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

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Find: FindStack,
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
        } else if (routeName === "Find") {
          iconName = "find";
        }
        return <Icon name={iconName} size={23} color={tintColor} />;
      }
    }),

    backBehavior: "none",
    tabBarOptions: {
      activeTintColor: "#222",
      inactiveTintColor: "#AFAFAF"
    }
  }
);

export default TabNavigator;
