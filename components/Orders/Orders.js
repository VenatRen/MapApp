import React, { useLayoutEffect } from 'react';
import { ScrollView } from 'react-native';
import styles from "./styles";
import OrdersItem from "./OrdersItem";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton } from "../../components/Header/index";

const Orders = (props) => {


    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => <HeaderBackButton navigation={navigation} />,
            headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Orders"} />,
            headerRight: (props) => <HeaderProfieButton navigation={navigation} />,
            headerStyle: {
                backgroundColor: "lightblue",
            },
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.mainContainer}>
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
        </ScrollView>
    );

}





export default Orders;
