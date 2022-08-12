import * as React from "react"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Screens/Login";
import Register from "../Screens/Register";

const AuthNavigation = () => {
  const AuthStack = createNativeStackNavigator();
  return ( 
      <AuthStack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator> 
  );
};

export default AuthNavigation;
