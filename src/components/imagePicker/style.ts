import { StyleSheet } from "react-native"

export default StyleSheet.create({
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f3f3f3",
    resizeMode: "center"
  },
  cameraIconView:
  {
    position: "absolute",
    bottom: -5,
    right: 0,
    backgroundColor: "orange",
    padding: 5, borderRadius: 30
  },
  cameraIcon: {
    width: 20,
    height: 20,
    tintColor: "white"
  },
  button: {
    alignSelf: "center",
    marginTop: 30,
    width: 90,
    height: 90,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#f3f3f3",
    alignItems: "center",
    justifyContent: "center",
  }
})