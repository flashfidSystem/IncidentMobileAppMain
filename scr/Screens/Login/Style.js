import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";
export default StyleSheet.create({
  Wrapper: {
    backgroundColor: colors.white,
    padding: 10,
    width: "100%",
    height:'100%'
  },
  LogoContainer: {
    paddingTop: 60,
   
  },
  LogoImage: {
    height: 170,
    width: 170,
    justifyContent: "center",
    alignSelf: "center",
  },
  Name: {
    fontSize: 20,
    color: colors.primary,
    justifyContent: "center",
    alignSelf: "center",  
  },
  LogoName: {
    fontSize: 30,
    color: colors.primary,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 30,
  },
 
  ButtonContainer: {
    color: colors.primary,
  },
  InputContainer: {
    color: colors.primary,
  },
  Reg: {
    
    flex:1,
    flexDirection:'row',
    alignSelf: "center",
    padding: 30,    
  },
  RegText: {
   color:colors.primary,
   fontSize: 15,
  },
  RegLink: { 
   color:colors.primary,
   fontSize: 15,
  },
});
