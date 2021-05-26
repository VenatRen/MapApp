import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import styles from "./styles";
import OrdersItem from "./OrdersItem";

const Orders = (props) => {


    const { navigation } = props;

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
