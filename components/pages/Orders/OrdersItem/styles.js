import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 5,
        marginTop: 5,
        elevation: 1,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "#fff",
    },
    titleContainer: {
        padding: 7,
        width: "100%",
    },
    infoContainer: {
        width: "100%",
        borderWidth: .5,
        borderRadius: 4,
        borderColor: "#fff",
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
    statusText: {
        color: "#fff",
        fontSize: 26,
    },
    text: {
        color: "#fff",
        fontSize: 24,
        paddingLeft: 16,
        padding: 8,
    },
    orderButtonContainer: {
        padding: 7,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
    },
    acceptContainer: {
        width: "40%",
        padding: 8,
        borderWidth: .5,
        borderRadius: 4,
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
        padding: 8,
        borderWidth: .5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    denyButton: {
        color: "red",
        fontSize: 16,
    },
    showContainer: {
        backgroundColor: '#FFF',
        padding: 8,
        marginHorizontal: 8,
        borderWidth: .5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    showButton: {
        fontSize: 16,
        color: "black",
    },
});

export default styles;