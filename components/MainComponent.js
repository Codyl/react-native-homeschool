import React, { Component } from "react";
import { View, Platform } from "react-native";
import Constants from "expo-constants";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";
import { Icon } from "react-native-elements";

import HomeComponent from "./HomeComponent";
import Courses from "./CoursesComponent";
import defaultNavigationOptions from "./NavigationOptions";
import UpcomingQuestsComponent from "./UpcomingQuestsComponent";
import AchievementsComponent from "./AchievementsComponent";
const HomeNavigator = createStackNavigator(
  {
    Home: { screen: HomeComponent },
  },
  defaultNavigationOptions
);
const CoursesNavigator = createStackNavigator(
  {
    Courses: { screen: Courses },
  },
  defaultNavigationOptions
);
const UpcomingQuestsNavigator = createStackNavigator(
  {
    Quests: { screen: UpcomingQuestsComponent },
  },
  defaultNavigationOptions
);
const AchievementsNavigator = createStackNavigator(
  {
    Achievements: { screen: AchievementsComponent },
  },
  defaultNavigationOptions
);

const SideNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon name="home" type="font-awesome-5" size={24} color={tintColor} />
        ),
      },
    },
    Achievements: {
      screen: AchievementsNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="trophy"
            type="font-awesome-5"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    Courses: {
      screen: Courses,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="dragon"
            type="font-awesome-5"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
    UpcomingQuests: {
      screen: UpcomingQuestsNavigator,
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Icon
            name="clipboard-list"
            type="font-awesome-5"
            size={24}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    drawerBackgroundColor: "#CEC8FF",
  }
);

const AppNavigator = createAppContainer(SideNavigator);

export default class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}>
        <AppNavigator />
      </View>
    );
  }
}
