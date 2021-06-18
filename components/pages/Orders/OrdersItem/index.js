import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import OurText from "../../../OurText";
import styles from "./styles";



const OrdersItem = (props) => {

    const { onPress, orderNumber, client, addres, date } = props;

    return (
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <OurText style={styles.fieldText}>Заказ №{orderNumber}</OurText>
            </View>
            <TouchableOpacity
                style={styles.showContainer}
                onPress={onPress}>
                <OurText style={styles.showButton}>Show map</OurText>
            </TouchableOpacity>
            <View style={styles.itemContainer}>
                <View style={styles.infoContainer}>
                    <OurText style={styles.text}>Клиент: {client}</OurText>
                    <OurText style={styles.text}>Адрес: {addres}</OurText>
                    <OurText style={styles.text}>Дата: {date}</OurText>
                </View>
            </View>
            <View style={styles.orderButtonContainer}>
                <TouchableOpacity style={styles.acceptContainer}>
                    <OurText style={styles.acceptButton}>Acccept</OurText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.denyContainer}>
                    <OurText style={styles.denyButton}>Deny</OurText>
                </TouchableOpacity>
            </View>

        </View>
    );

}

export default OrdersItem;
