import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        paddingVertical: 20,
        paddingHorizontal: 8,
        backgroundColor: "#FF7373"
    },
    infoContainer: {
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderColor: "#fff5",
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
        borderColor: "green",
        alignItems: 'center',
        justifyContent: 'center',
    },
    denyContainer: {
        marginBottom: 5,
        marginTop: 5,
        padding: 5,
        borderWidth: .5,
        borderRadius: 5,
        borderColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
    },
    showContainer: {
        padding: 8,
        borderTopWidth: .5,
        borderBottomWidth: .5,
        borderColor: "orange",
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;