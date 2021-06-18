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
        borderBottomWidth: .5,
    },
    text: {
        color: "#fff",
        fontSize: 24,
        paddingLeft: 16,
        padding: 8,
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
        padding: 18,
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
        backgroundColor: '#FFFA',
        padding: 8,
        marginHorizontal: 8,
        borderWidth: .5,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    showButton: {
        fontSize: 16,
        color: "#fff",
    },
});

export default styles;