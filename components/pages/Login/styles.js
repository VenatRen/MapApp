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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 4,
    height: 60,
    width: 250,
    marginBottom: 15,
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: "#fff",
    borderWidth: 1,
    marginBottom: 5,
    marginTop: 5,
    height: 30,
    width: 100,
  },
});

export default styles;