import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawer from "../Components/CustomDrawer/customDrawer";

import Ionicons from "react-native-vector-icons/Ionicons";

import AddWarning from "../Screens/CreateWarning/index";
import AddIncident from "../Screens/CreateIncident/incident";
import AddPerson from "../Screens/CreateIncident/person";
import AddOffence from "../Screens/CreateIncident/offence";
import AddAttachment from "../Screens/CreateIncident/attachment";

import TabNavigator from "./TabNavigator";
import colors from "../assets/theme/colors";

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: colors.primary,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
        drawerLabelStyle: {
          marginLeft: -25,
          fontSize: 15,
        },
      }}
    >
      <Drawer.Screen
        name="Dashboard"
        component={TabNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Warning"
        component={AddWarning}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="warning" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Add Incident"
        component={AddIncident}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="car" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Reports"
        component={AddIncident}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="book" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Setups"
        component={AddIncident}
        options={{
          drawerIcon: ({ color }) => (
            <Ionicons name="aperture" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
