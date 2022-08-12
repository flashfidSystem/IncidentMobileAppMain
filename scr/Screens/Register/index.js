import React, { useState } from "react";
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

import { useNavigation } from "@react-navigation/native";
import Styles from "./Style";
const Register = () => {
  const OnSubmit = () => {};

  const navigation = useNavigation();
  const [secureTextEntryPassword, setSecureTextEntryPassword] = useState(true);
  const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={Styles.Wrapper}>
        <View style={Styles.LogoContainer}>
          <Image
            style={Styles.LogoImage}
            source={require("../../../assets/images/logo.png")}
          />
          <Text style={Styles.Name}>Incident Management System</Text>
          <Text style={Styles.LogoName}>Register here</Text>
        </View>

        <View style={Styles.InputContainer}>
          <CustomInput
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            style={Styles.Input}
          />
          <CustomInput
            label="Full Name"
            iconPosition="right"
            placeholder="Full Name"
            style={Styles.Input}
          />
          <CustomInput
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            style={Styles.Input}
          />
          <CustomInput
            label="Password"
            iconPosition="right"
            placeholder="Enter Password" 
            secureTextEntry={secureTextEntryPassword}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntryPassword((prev) => !prev);
                }}
              >
                {secureTextEntryPassword ? <Text>Show</Text> : <Text>Hide</Text>}
              </TouchableOpacity>
            }
            style={Styles.Input}
            />
          <CustomInput
            label="Confirm Password"
            iconPosition="right"
            placeholder="Enter Confirm Password"
            icon={
              <TouchableOpacity
                onPress={() => {
                  setSecureTextEntryConfirmPassword((prev) => !prev);
                }}
              >
                {secureTextEntryConfirmPassword ? <Text>Show</Text> : <Text>Hide</Text>}
              </TouchableOpacity>
            }
            style={Styles.Input}
            secureTextEntry={secureTextEntryConfirmPassword}
          />
        </View>
        <View style={Styles.ButtonContainer}>
          <CustomButton title={"Register"} primary onPress={OnSubmit} />
        </View>
        <View style={Styles.Reg}>
          <Text style={Styles.RegText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={Styles.RegLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
