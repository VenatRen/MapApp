import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    minHeight: "100%",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  topContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    padding: 8,
    marginVertical: 10,
    elevation: 1,
    width: "100%",
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 1,
  },
});

export default styles;