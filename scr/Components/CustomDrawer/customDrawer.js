import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../assets/theme/colors";
import { StatusBar } from "react-native";

const CustomDrawer = (props) => {
  return (
    <>
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView
          {...props}
          contentContainerStyle={{ backgroundColor: colors.white }}
        >
          <ImageBackground
            source={require("../../../assets/images/bg.png")}
            style={{ padding: 20 }}
          >
            <Image
              source={require("../../../assets/images/images.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: colors.primary,
                fontSize: 20,
                // fontFamily: "Roboto-Medium",
                marginBottom: 5,
              }}
            >
              John Doe
            </Text>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  color: colors.primary,
                  // fontFamily: "Roboto-Regular",
                  marginRight: 5,
                }}
              >
                SU
              </Text>
              <View
                style={{
                  backgroundColor: colors.primary,
                  padding: 1,
                  borderRadius: 4,
                }}
              >
                <Ionicons
                  name="checkmark-done"
                  size={15}
                  color={colors.white}
                />
              </View>
            </View>
          </ImageBackground>
          <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
            <DrawerItemList {...props} />
          </View>
        </DrawerContentScrollView>
        <View
          style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}
        >
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="share-social-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  // fontFamily: "Roboto-Medium",
                  marginLeft: 5,
                }}
              >
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  // fontFamily: "Roboto-Medium",
                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CustomDrawer;
