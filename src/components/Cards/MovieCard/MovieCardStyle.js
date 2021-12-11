import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    margin:10,
    backgroundColor:"orange",
    borderWidth:1,
    height:Dimensions.get("screen").height / 4,
    width:Dimensions.get("screen").width / 2.5,
  },
  imageContainer:{
    flex:1,
    borderRadius:20,
    
  },
  textView:{
    padding:10,
    justifyContent:"flex-end",
    flex:1

  },
  text:{
    fontSize:15,
    fontWeight:"800"
  },
  rateView:{
    flexDirection:"row",
    alignItems:"center"
  }
})
export default styles