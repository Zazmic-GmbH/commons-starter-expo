import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./MainScreen";

import { Animated, Button } from "react-native";
import i18n from "../LocalizationContext";

const Stack = createStackNavigator();
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const getScreenOptions = ({ navigation, route }) => {
  const title = route.name;
  return {
    headerShown: false,
    headerTitleAlign: "center",
    headerTintColor: "#fff",
    headerStyle: {
      backgroundColor: "#1c2b4a",
    },
    headerLeft: () => (
      <Button
        onPress={() => navigation.toggleDrawer()} // Пример действия: открыть боковое меню
        title="Menu"
        color="#fff"
      />
    ),
    title: title === "MainScreen" ? null : i18n.t(title).split(" - ")[0],
  };
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={getScreenOptions}>
      <Stack.Screen
        key="1"
        name="MainScreen"
        component={MainScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
