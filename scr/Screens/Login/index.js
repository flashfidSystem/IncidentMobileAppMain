import React, { useContext, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";
import Styles from "./Style";
import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const navigation = useNavigation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const [username, setUsername] = useState(null);
  const [Password, setPassword] = useState(null);
  const { isLoading, login } = useContext(AuthContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={Styles.Wrapper}>
        <View style={Styles.LogoContainer}>
          <Image
            style={Styles.LogoImage}
            source={require("../../../assets/images/logo.png")}
          />
          <Text style={Styles.Name}>Incident Management System(Unilag)</Text>
          <Text style={Styles.LogoName}>Login</Text>
        </View>

        <View style={Styles.InputContainer}>
          <CustomInput
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            style={Styles.Input}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <CustomInput
            label="Password"
            iconPosition="right"
            placeholder="Enter Password"
            value={Password}
            onChangeText={(text) => setPassword(text)}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntry((prev) => !prev);
                }}
              >
                {secureTextEntry ? <Text>Show</Text> : <Text>Hide</Text>}
              </TouchableOpacity>
            }
            style={Styles.Input}
            secureTextEntry={secureTextEntry}
          />
        </View>
        <View style={Styles.ButtonContainer}>
          <CustomButton
            title={"Login"}
            primary
            onPress={() => {
              login(username, Password);
            }}
          />
        </View>
        <View style={Styles.Reg}>
          <Text style={Styles.RegText}>New user? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={Styles.RegLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
