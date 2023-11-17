import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View, Text } from "react-native";

import StackNavigator from "./screens/StackNavigator";
import i18n from "./LocalizationContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";
import { DeviceSizeProvider } from './DeviceSizeContext';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={StackNavigator} />
      {/* Можно добавить дополнительные экраны для Drawer здесь */}
    </Drawer.Navigator>
  );
}

// function CustomDrawerContent(props) {
//   return (
//     <View style={{ flex: 1, backgroundColor: '#1c2b4a' }}> 
//       <Text style={{ marginTop: 100, marginLeft: 50, color: 'white' }}>Menu</Text>
//     </View>
//   );
// }

// function DrawerNavigator() {
//   return (
//     <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={StackNavigator} />
//       {/* Другие экраны Drawer */}
//     </Drawer.Navigator>
//   );
// }

export default function App() {

  useEffect(() => {
    async function loadLocale() {
      let locale = await AsyncStorage.getItem("locale");
      if (!locale) {
        locale = i18n.defaultLocale;
      }
      i18n.locale = locale;
    }
    loadLocale();
  }, []);

  return (
    <>
      <DeviceSizeProvider>
        <StatusBar backgroundColor="#fff"/>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </DeviceSizeProvider>
    </>
  );
}
