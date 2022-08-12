import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import MyDashboard from "../Screens/Dashboard/index";
import AddIncident from "../Screens/CreateIncident/incident";
import Paid from "../Screens/Payment/paid";
import AddOffence from "../Screens/CreateIncident/offence";
import Menu from "../Screens/Menu/index";
import { Icon } from "@rneui/base";
import { Text, View } from "react-native";
import colors from "../assets/theme/colors";

const HomeNavigation = () => {
  const Tabs = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  // const HomeStack = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="addIncident2"
  //         component={AddIncident}
  //         options={{ headerShown: false }}
  //       />
  //       <Stack.Screen
  //         name="addOffence"
  //         component={AddOffence}
  //         options={({ route }) => ({
  //           title: route.params?.title,
  //         })}
  //       />
  //     </Stack.Navigator>
  //   );
  // };

  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: { backgroundColor: colors.white },
          tabBarInactiveTintColor: "#fff",
          tabBarActiveTintColor: "yellow",
        }}
      >
        <Tabs.Screen
          name={"DashBoard"}
          component={MyDashboard}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="ionicon"
                  name="home"
                  size={focused ? 30 : 25}
                  color={focused ? colors.primary : colors.grey}
                />
                <Text style={{ fontSize: 15, fontWeight: "300" }}>Home</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name={"Paid"}
          component={Paid}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="ionicon"
                  name="cash"
                  size={focused ? 30 : 25}
                  color={focused ? colors.primary : colors.grey}
                />
                <Text style={{ fontSize: 15, fontWeight: "300" }}>Paid</Text>
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name={"More"}
          component={Menu}
          options={{
            tabBarIcon: ({ focused }) => (
              <View>
                <Icon
                  type="ionicon"
                  name="apps"
                  size={focused ? 30 : 25}
                  color={focused ? colors.primary : colors.grey}
                />
                <Text style={{ fontSize: 15, fontWeight: "300" }}>More</Text>
              </View>
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
};
const getTabBarVisibility = (route) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  // console.log(routeName);

  if (routeName == "AddOffence") {
    return "none";
  }
  return "flex";
};
const getHeaderVisibility = (route) => {
  // console.log(route);
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";
  // console.log(routeName);

  if (routeName == "AddOffence") {
    return false;
  }
  return true;
};
export default HomeNavigation;
