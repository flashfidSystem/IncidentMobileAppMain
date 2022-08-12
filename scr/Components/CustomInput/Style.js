import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 0,
    backgroundColor: colors.white,
    marginTop: 5,
  },

  inputContainer: {
    paddingVertical: 6,
  },

  textInput: {
    flex: 1,
    padding: 8,
    width: "100%",
  },

  error: {
    color: colors.danger,
    paddingTop: 4,
    fontSize: 12,
  },
  Label: {
    color: colors.primary,
    fontSize: 17,
  },
  Input: {},
});
