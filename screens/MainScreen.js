import React from "react";
import { StyleSheet, View } from "react-native";
import TabNavigator from "./TabNavigator";
const MainScreen = ({ navigation }) => {


  return (
    <View style={styles.mainContainer}>

      <TabNavigator navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#1c2b4a",
      },
      container: {
        flex: 1,
        backgroundColor: "#1c2b4a",
        marginBottom: 40,
        marginTop: 50,
      },
});

export default MainScreen;
