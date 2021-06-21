import React from "react";
import { View, TouchableOpacity, LayoutAnimation } from "react-native";
import OurText from "../../components/OurText";
import styles from "./styles.js";
import OurIconButton from "../OurIconButton/index";
import { faChevronLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export const HeaderBackButton = (props) => {
    const { navigation } = props;

    const goBack = (e) => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <View style={styles.backContainer}>
                <OurIconButton icon={faChevronLeft} size={49} onPress={goBack}/>
            </View>
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

export const HeaderLogOutButton = (props) => {
    const { navigation } = props;

    const goToLogOut = (e) => {
        navigation.navigate("Login");
    };

    return (
        <View style={styles.container}>
            <View style={styles.SignOutContainer}>
                <OurIconButton icon={faSignOutAlt} size={49} onPress={goToLogOut}/>
            </View>
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
                <HeaderLogOutButton />
            </View>
        </>
    );
};

export default React.memo(Header);