import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { LayoutDashboard, GalleryThumbnails, Wrench, Settings } from "lucide-react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import { useRoute } from "@react-navigation/native";
import i18n from "../LocalizationContext";
import { DeviceSizeContext } from "../DeviceSizeContext";

const { width, height } = Dimensions.get("window");
const isIpad =
  (width >= 768 && height >= 1024) || (width >= 1024 && height >= 768);

const TabNavigator = ({ navigation, props }) => {
  const deviceSize = useContext(DeviceSizeContext);
  const styles = getDynamicStyles(deviceSize);

  const { name: currentScreen } = useRoute();

  const handlePress = () => {

  };


  return (
    <>
      <View style={styles.container}>
        <Divider />
        <View style={styles.row}>
          {/* add an "active" class if the screen name matches */}
          <TouchableOpacity
            onPress={handlePress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View
              style={[
                styles.button,
                currentScreen !== "MainScreen"
                  ? styles.inactive
                  : styles.active,
              ]}
            >
              <LayoutDashboard size={24} color="#fff" />
            </View>
            <Text
              style={[
                styles.subtitle,
                currentScreen !== "Screen2" && styles.inactive,
              ]}
            >
              {i18n.t("main")}
            </Text>
          </TouchableOpacity>
          {/* add an "active" class if the screen name matches */}
          <TouchableOpacity
            onPress={handleMailboxPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View
              style={[
                styles.button,
                currentScreen !== "Screen2"
                  ? styles.inactive
                  : styles.active,
              ]}
            >
              <GalleryThumbnails size={24} color="#fff" />
            </View>
            <Text
              style={[
                styles.subtitle,
                currentScreen !== "Screen2" && styles.inactive,
              ]}
            >
              {i18n.t("gallery")}
            </Text>
          </TouchableOpacity>
          {/* add an "active" class if the screen name matches */}
          <TouchableOpacity
            onPress={handleMailboxPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View
              style={[
                styles.button,
                currentScreen !== "Screen2"
                  ? styles.inactive
                  : styles.active,
              ]}
            >
              <Wrench size={24} color="#fff" />
            </View>
            <Text
              style={[
                styles.subtitle,
                currentScreen !== "Screen2" && styles.inactive,
              ]}
            >
              {i18n.t("tools")}
            </Text>
          </TouchableOpacity>
          {/* add an "active" class if the screen name matches */}
          <TouchableOpacity
            onPress={handleMailboxPress}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View
              style={[
                styles.button,
                currentScreen !== "Screen2"
                  ? styles.inactive
                  : styles.active,
              ]}
            >
              <Settings size={24} color="#fff" />
            </View>
            <Text
              style={[
                styles.subtitle,
                currentScreen !== "Screen2" && styles.inactive,
              ]}
            >
              {i18n.t("settings")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const getDynamicStyles = (deviceSize) => {
  return StyleSheet.create({
  container: {
    flex: 0.3,
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#1c2b4a",
    paddingBottom: deviceSize === 'L' || deviceSize === 'XL' ? 15 : 5,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
  button: {
    marginHorizontal: 20,
    marginTop: -5,
  },
  subtitle: {
    color: "#fff",
    fontSize: isIpad ? 12 : 10,
    marginTop: 5,
    textAlign: "center",
    flex: 1,
  },
  inactive: {
    opacity: 0.6,
    borderWidth: 0,
  },
  active: {
    opacity: 1,
    borderWidth: 0,
  },

});
}

export default TabNavigator;
