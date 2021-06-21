import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { HeaderBackButton, HeaderTitle, HeaderLogOutButton } from "../../Header/index";
import styles from "./styles";

const OrderSet = (props) => {

    const { navigation } = props;

    const [gradStart, gradEnd] = ["#fdc830", "#f37335"];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => <HeaderBackButton navigation={navigation} />,
            headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Orders"} />,
            headerRight: (props) => <HeaderLogOutButton navigation={navigation} />,
            headerStyle: {
                backgroundColor: gradStart,
            },
        });
    }, [navigation]);

    return (
        <>
            <LinearGradient
                style={styles.background}
                locations={[.2, 1]}
                colors={[gradStart, gradEnd]} />
        </>
    );

}

export default OrderSet;
