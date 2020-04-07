import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

import Home from "./../components/Home";
import Category from "./../components/Category";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    // props.navigation.setOptions({
    //   title: "This is title!",
    // });
    // props.navigation.push('Home');
  }

  gotoDetail() {
    this.props.navigation.push("PostDetailScreen");
  }

  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "angellist"
                : "angellist";
            } else if (route.name === "Category") {
              iconName = focused ? "air-freshener" : "air-freshener";
            }

            // You can return any component that you like here!
            return <FontAwesome5 name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Category" component={Category} />
      </Tab.Navigator>
    );
  }
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
