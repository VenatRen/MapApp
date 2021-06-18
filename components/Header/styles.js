import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        height: 74,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    backContainer: {
        marginLeft: 10,
    },
    iconBack: {
        width: 49,
        height: 49,
        justifyContent: "center",
        alignItems: "flex-end",
    },
    titleContainer: {},
    title: {
        fontSize: 25,
        color: "#fff",
        textAlign: "center",
    },
    cartContainer: {
    },
    iconCart: {
        width: 64,
        height: 40.5,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    badge: {
        position: "absolute",
        width: 28,
        height: 28,
        top: 28,
        left: -15,
        alignItems: "center",
        justifyContent: "center",
    },
    badgeText: {
        color: "#fff",
        textShadowColor: "#000",
        textShadowRadius: 1,
        textShadowOffset: {width: .5, height: .5},
    },
    priceText: {
        color: "#fff",
        textShadowRadius: 1,
        textShadowOffset: {width: 1, height: 1},
    }
});
export default styles;