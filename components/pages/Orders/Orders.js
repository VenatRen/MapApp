import React, { useLayoutEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton } from "../../Header/index";
import OrdersItem from "./OrdersItem/index";
import styles from "./styles";

const Orders = (props) => {

    const DATA = [
        {
            id: "1",
            number: "12",
            client: "Hello",
        },
        {
            id: "2",
            number: "13",
            client: "Hello",
        },
        {
            id: "3",
            number: "14",
            client: "Hello",
        }, {
            id: "4",
            number: "14",
            client: "Hello",
        },
    ];



    const { navigation, number } = props;

    const [gradStart, gradEnd] = ["#fdc830", "#f37335"];

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => <HeaderBackButton navigation={navigation} />,
            headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Orders"} />,
            headerRight: (props) => <HeaderProfieButton navigation={navigation} />,
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
            <FlatList
                data={DATA}
                renderItem={({ item }) => <OrdersItem number={item.number} client={item.client} />}
                keyExtractor={(item) => item.id}
            />
        </>
    );

}





export default Orders;
