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
    flex: 5,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    flexDirection:"row"
  },
  briefView:{
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color:"grey"
  },
  text: {
    fontSize: 15,
    padding: 10,
    color:"grey"
  },
  cast: {
    flex: 2,
    padding: 10,
    margin: 10

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
    flex:2
  }
})
export default styles