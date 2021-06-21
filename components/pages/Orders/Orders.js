import React, { useLayoutEffect } from 'react';
import { FlatList } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";
import { HeaderBackButton, HeaderTitle, HeaderLogOutButton } from "../../Header/index";
import OrdersItem from "./OrdersItem/index";
import styles from "./styles";

const Orders = (props) => {

    const DATA = [
        {
            id: "1",
            orderNumber: "12",
            orderStatus: "Ожидание курьера",
            client: "Klaun Krasti",
            addres: "2135 W CERMAK RD 60608",
            date: "01/01/2001",
            telephone: "+7 928-325-05-81",
        },
        {
            id: "2",
            orderNumber: "348",
            client: "Klaun Krasti",
            addres: "2135 W CERMAK RD 60608",
            date: "2021-06-16",
        },
        {
            id: "3",
            orderNumber: "13",
            client: "Name Name",
            addres: "Here",
            date: "01/01/2001",
        },
        {
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
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                    <OrdersItem
                        goToMap={() => navigation.navigate('MapItem')}
                        goOrderSet={()=> navigation.navigate('OrderSet')}
                        orderNumber={item.orderNumber} client={item.client}
                        addres={item.addres} date={item.date}
                        telephone={item.telephone} orderStatus={item.orderStatus}/>
                }
                keyExtractor={(item) => item.id}
            />
        </>
    );

}

export default Orders;
