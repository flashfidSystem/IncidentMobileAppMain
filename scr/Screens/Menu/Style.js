import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  Wrapper: {
    flexDirection: "column",
    height: "100%",
    margin: 9,
  },
  Container: {
    flex: 1,
    height: "100%",
  },
  Profile: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: "row",
    borderRadius: 10,
    padding: 5,
  },
  ProfileImage: {
    flex: 2,
    height: 62,
    width: 62,
    borderRadius: 50,
  },
  ProfileText: {
    flex: 8,
    color: colors.dark,
    fontSize: 20,
    paddingTop: 5,
  },
  Icon: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  ProfileName: {
    color: colors.dark,
    fontSize: 20,
    fontWeight: "300",
    paddingLeft: 20,
    paddingTop: 5,
  },
  ProfileTitle: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: "100",
    paddingLeft: 20,
    paddingTop: 10,
  },
  Details: {
    flex: 8,
    borderRadius: 10,
    marginTop: 30,
  },
  DetailsContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.white,
    maxHeight: 60,
    minWidth: "100%",
    borderRadius: 10,
    marginBottom: 10,
  },
  DetailsLeft: {
    flex: 2,
  },
  DetailsRight: {
    flex: 12,
  },
  DetailsIcon: { 
    borderRadius: 50,
    margin: 8,
  },
});
