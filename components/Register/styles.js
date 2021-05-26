import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input:{
        color: "red",
        borderRadius: 4,
        height: 60,
        width:250,
        marginBottom: 15,
        marginTop: 10,
      },
      button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor:'red',
        borderWidth: 1,
        marginBottom: 5,
        marginTop: 5,
        height:30,
        width:100,
      }
});

export default styles;