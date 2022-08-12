import React, { useState } from "react";
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Styles from "./Style";
import CustomButton from "../../Components/CustomButton";
import CustomInput from "../../Components/CustomInput";

const CreatIncident = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={Styles.Wrapper}>
        <View style={Styles.InputContainer}>
          <CustomInput
            label="Incidence Type"
            iconPosition="right"
            placeholder="Enter Incidence Type"
            style={Styles.Input}
          />
          <CustomInput
            label="Date Time"
            iconPosition="right"
            placeholder="Enter Date Time"
            style={Styles.Input}
          />
          <CustomInput
            label="Location"
            iconPosition="right"
            placeholder="Enter Location"
            style={Styles.Input}
          />
          <CustomInput
            label="Investigating Officer"
            iconPosition="right"
            placeholder=" Enter Investigating Officer"
            style={Styles.Input}
          />
          <CustomInput
            label="Action Taken"
            iconPosition="right"
            placeholder=" Enter Action Taken"
            style={Styles.Input}
          />
          <CustomInput
            label="Investigation"
            iconPosition="right"
            placeholder=" Enter Investigation"
            style={Styles.Input}
          />
          <CustomInput
            label="Observation"
            iconPosition="right"
            placeholder=" Enter Observation"
            style={Styles.Input}
          />
          <CustomInput
            label="Incidence Remark"
            iconPosition="right"
            placeholder=" Enter Incidence Remark"
            style={Styles.Input}
          />
          <CustomInput
            label="Cause"
            iconPosition="right"
            placeholder=" Enter Cause of incident"
            style={Styles.Input}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default CreatIncident;
