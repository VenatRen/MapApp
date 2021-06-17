import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton } from "../../Header/index";
import OrdersItem from "./OrdersItem/index";
import styles from "./styles";

const Orders = (props) => {

    const DATA = [
        {
            id: "1",
            orderNumber: "12",
            client: "Hello1",
            addres: "Here",
            date: "01/01/2001",
        },
        {
            id: "2",
            orderNumber: "13",
            client: "Hello2",
            addres: "Here",
            date: "01/01/2001",
        },
        {
            id: "3",
            orderNumber: "14",
            client: "Hello3",
            addres: "Here",
            date: "01/01/2001",
        }, {
            id: "4",
            orderNumber: "14",
            client: "Hello4",
            addres: "Here",
            date: "01/01/2001",
        },
    ];

    const { navigation } = props;

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
                renderItem={({ item }) =>
                    <OrdersItem
                        onPress={() => navigation.navigate('MapItem')}
                        orderNumber={item.orderNumber} client={item.client}
                        addres={item.addres} date={item.date} />
                }
                keyExtractor={(item) => item.id}
            />
        </>
    );

}

export default Orders;
