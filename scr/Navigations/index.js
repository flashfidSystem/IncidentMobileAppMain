import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigation";
import AppNavigator from "./AppStack";
import { AuthProvider } from "../context/AuthContext";

const AppNavContainer = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        {/* <AppNavigator /> */}
        <AuthNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppNavContainer;
