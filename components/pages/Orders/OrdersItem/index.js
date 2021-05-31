import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import OurText from "../../../OurText";
import styles from "./styles";

const OrdersItem = (props) => {

    const { onPress, date } = props;

    return (
        <View style={styles.mainContainer}>
            <OurText style={styles.fieldText}>Заказ #2421</OurText>
            <View style={styles.itemContainer}>
                <View style={styles.infoContainer}>
                    <OurText style={styles.text}>Клиент: Вася Пупкин</OurText>
                    <OurText style={styles.text}>Адрес: Туда</OurText>
                    <OurText style={styles.text}>{date}</OurText>
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
