import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({

  body_container: {
    flex: 1,
    backgroundColor: '#ffca28'
  },
  genre: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  brief: {
    flex: 5,
    backgroundColor: "grey",
    margin: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10
  },
  text: {
    fontSize: 15,
    padding: 10
  },
  cast: {
    flex: 3,
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
  }


})
export default styles