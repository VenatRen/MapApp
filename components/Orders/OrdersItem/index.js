import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import OurText from "../../OurText";
import styles from "./styles";

const OrdersItem = (props) => {

    const { navigation, onPress } = props;

    return (
        <View>
            <OurText style={styles.fieldText}>Order №1</OurText>
            <View style={styles.itemContainer}>
                <View style={styles.infoContainer}>
                    <OurText style={styles.text}>От: Вася Пупкин</OurText>
                    <OurText style={styles.text}>Куда: Туда</OurText>
                    <OurText style={styles.text}>Время доставки: 00:00</OurText>
                </View>
                <TouchableOpacity style={styles.acceptContainer}>
                    <OurText style={styles.acceptButton}>Acccept</OurText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.denyContainer}>
                    <OurText style={styles.acceptButton}>Deny</OurText>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.showContainer}
                onPress={onPress}
            >
                <OurText style={styles.showButton}>Show more</OurText>
            </TouchableOpacity>
        </View>
    );

}





export default OrdersItem;
