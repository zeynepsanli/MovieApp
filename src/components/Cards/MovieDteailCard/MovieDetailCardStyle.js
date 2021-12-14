import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  container: {
    flex: 2,
    backgroundColor: '#221f27'
  },
  genre: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 6,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection:"row"
  },
  briefView:{
    backgroundColor:"#000000a0",
    
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    padding: 10,
    color:"white"
  },
  text: {
    fontSize: 15,
    paddingTop: 10,
    paddingBottom:10,
    paddingLeft:4,
    paddingRight:3,
    color:"white",
  },
  cast: {
    flex: 2,
    padding: 10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  genre_index:
  {
    backgroundColor: "gray",
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 8,
    height: Dimensions.get('screen').height / 20
  },
  image:{
    flex: 2,
    justifyContent:"flex-end"
  },
  rateView:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:20,
  },
  genreView:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  genresView:{
    flexDirection:"row",
    alignItems:"center",
    marginRight:20,
    width:Dimensions.get("screen").width/1.2
  }
})
export default styles