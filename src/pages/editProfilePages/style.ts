import { StyleSheet } from "react-native"

export default StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    color: "black",
    marginTop: 20
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f3f3f3",
    resizeMode: "center"
  },
})