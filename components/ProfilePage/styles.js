import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 15,
        marginTop: 15,
    },
    topContainer: {
        flexDirection:"row",
        borderWidth: 1,
        borderColor: "#707070",
    },
    picture_profile: {
        width: 110,
        height: 110,
        borderRadius: 36,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#707070",
    },
    pictureContainer:{
        margin: 8,
        width: 110,
        height: 110,
    },
    infoProfile:{
        width: "100%",
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        marginTop: 15,
    },
    nameInfo: {
        alignItems:"center",
        backgroundColor: "#fff",
        borderWidth: 1,
    },
});

export default styles;