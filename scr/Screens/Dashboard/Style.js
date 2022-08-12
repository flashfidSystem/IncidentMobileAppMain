import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  Wrapper: {
    flexDirection: "column",
    height: "100%",
    marginTop: 9,
  },
  Bg: {
    flex: 1,
    backgroundColor: colors.primary,
  },

  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  Notifications: {
    flex: 2.5,
    backgroundColor: "#cecece",
    borderRadius: 5,
    marginTop: 13,
    height: "100%",
  }, 
  BgLabel: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "300",
  },
  BgSubLabel: {
    color: colors.white,
    fontSize: 60,
    fontWeight: "400",
  },
  NotificationsText: {
    color: colors.dark,
    fontSize: 25,
    fontWeight: "200",
  },
});
