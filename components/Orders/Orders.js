import React, { useState, useLayoutEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from "./styles";
import OrdersItem from "./OrdersItem";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton} from "../../components/Header/index";

const Orders = (props) => {


    const { navigation } = props;

    useLayoutEffect( () => {
        navigation.setOptions({
            headerLeft: (props) => <HeaderBackButton navigation={navigation}/>,
            headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Orders"}/>,
            headerRight: (props) => <HeaderProfieButton navigation={navigation} />
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.mainContainer}>
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
            <OrdersItem onPress={() => navigation.navigate('MapItem')} />
        </ScrollView>
    );

}





export default Orders;
