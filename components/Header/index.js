import React from "react";
import { View, TouchableOpacity, LayoutAnimation } from "react-native";
import OurText from "../../components/OurText";
import styles from "./styles.js";

export const HeaderBackButton = (props) => {
    const { navigation } = props;

    const goBack = (e) => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <OurText>Back</OurText>
            </TouchableOpacity>
        </View>
    );
};

export const HeaderTitle = (props) => {
    const { title, onPress } = props;

    const doPress = (e) => {
        if (onPress)
            onPress(e);
    };

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <TouchableOpacity activeOpacity={onPress ? 0.2 : 1} onPress={doPress}>
                    <OurText style={styles.title}>{title}</OurText>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export const HeaderProfieButton = (props) => {
    const { navigation } = props;

    const goToProfile = (e) => {
        navigation.navigate("MapItem");
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goToProfile}>
                <OurText>Profile</OurText>
            </TouchableOpacity>
        </View>
    );
};

const easeInEaseOut = LayoutAnimation.create(
    200,
    LayoutAnimation.Types.easeInEaseOut,
    LayoutAnimation.Properties.scaleY,
);


const Header = (props) => {
    const { title } = props;

    return (
        <>
            <View style={styles.container}>
                <HeaderBackButton />
                <HeaderTitle title={title} />
                <HeaderProfieButton />
            </View>
        </>
    );
};

export default React.memo(Header);