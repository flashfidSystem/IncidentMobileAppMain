import React from "react";
import { View, Text, TextInput } from "react-native";
import colors from "../../assets/theme/colors";
import styles from "./Style";

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return colors.danger;
    }

    if (focused) {
      return colors.primary;
    } else {
      return colors.grey;
    }
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.Label}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          {
            display: "flex",
          },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
        ]}
      >
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#CECECE",
            paddingLeft:3,
            paddingRight:3,
            maxHeight: 42,
           minWidth:50,
            borderBottomRightRadius: 4,
            borderTopRightRadius: 4,
          }}
        >
          {icon && icon}
        </View>

        <TextInput
          style={[styles.textInput, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
