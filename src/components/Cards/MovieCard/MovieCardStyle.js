import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    margin:10,
    backgroundColor:"orange",
    borderWidth:1,
    borderRadius:20,
    height:Dimensions.get("screen").height / 4,
    width:Dimensions.get("screen").width / 2.5,
  },
  textView:{
    padding:10
  },
  text:{
    fontSize:15,
    fontWeight:"800"
  }
})
export default styles