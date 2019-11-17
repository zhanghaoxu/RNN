import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
//baseConfig
import baseConfig from "@/config/baseConfig";
import Icon from "react-native-vector-icons/AntDesign";
import HomeStack from "./tabStack/HomeStack";
import MyStack from "./tabStack/MyStack";
import FindStack from "./tabStack/FindStack";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Find: FindStack,
    My: MyStack
  },
  {
    initialRouteName: "Home",
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
      activeTintColor: baseConfig.tabbar.activeTintColor,
      inactiveTintColor: baseConfig.tabbar.inactiveTintColor
    }
  }
);

export default TabNavigator;
