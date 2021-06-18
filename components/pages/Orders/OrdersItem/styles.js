import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 5,
        marginTop: 5,
    },
    titleContainer: {
        padding: 7,
    },
    infoContainer: {
        width: "100%",
    },
    itemContainer: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    fieldText: {
        color: "#fff",
        fontSize: 26,
    },
    text: {
        color: "#fff",
        fontSize: 24,
        paddingLeft: 16,
    },
    orderButtonContainer: {
        marginBottom: 15,
        marginTop: 5,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-around",
    },
    acceptContainer: {
        width: "40%",
        padding: 18,
        borderWidth: .5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    acceptButton: {
        color: "green",
        fontSize: 16,
    },
    denyContainer: {
        width: "40%",
        padding: 18,
        borderWidth: .5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    denyButton:{
        color: "red",
        fontSize: 16,
    },
    showContainer: {        
        backgroundColor: '#FFFA',
        padding: 8,
        borderWidth: .5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    showButton: {
        fontSize: 16,
        color: "#fff",
    },
});

export default styles;