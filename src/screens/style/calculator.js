import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxContainer: {
    height: "100%",
    width: "100%",
    padding: 22,
    paddingTop: 80,
  },
  heading: {
    paddingLeft: 10,
  },
  textHeading: {
    fontSize: 28,
    color: "white",
  },
  result: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 120,
    marginBottom: 40,
    borderRadius: 8,
    padding: 10,
  },
  btnClear: {
    position: "absolute",
    bottom: 0,
    right: 0,
    paddingRight: 10,
  },
  textResult: {
    fontSize: 28,
  },
  boxInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  btn: {
    width: "22%",
    height: 80,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  textBtn: {
    fontSize: 32,
    color: "white",
  },
  textStar: {
    paddingTop: 15,
  },
});
