import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 15,
        marginTop: 15,
    },
    infoContainer: {
        width: "60%",
    },
    itemContainer: {
        padding: 8,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    fieldText: {
        fontSize: 20,
    },
    text: {
        fontSize: 16,
        paddingLeft: 16,
    },
    acceptContainer: {
        marginBottom: 5,
        marginTop: 5,
        padding: 5,
        borderWidth: .5,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    denyContainer: {
        marginBottom: 5,
        marginTop: 5,
        padding: 5,
        borderWidth: .5,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    showContainer: {
        padding: 8,
        borderWidth: .5,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;