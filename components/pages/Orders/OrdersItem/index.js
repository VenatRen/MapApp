import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import OurText from "../../../OurText";
import styles from "./styles";



const OrdersItem = (props) => {

    const { goToMap, orderNumber, client, addres, date, orderStatus, telephone, goOrderSet } = props;

    const [orderCheck, setOrderCheck] = useState(false)
    const [orderDeny, setOrderDeny] = useState(false)

    return (
        <>
            {
                orderDeny ?
                    <><OurText>delete</OurText></>
                    :
                    <View style={styles.mainContainer}>
                        <View style={styles.titleContainer}>
                            <OurText style={styles.fieldText}>Заказ №{orderNumber}</OurText>
                            <OurText style={styles.statusText}>Статус: {orderStatus}</OurText>
                            </View>
                        <TouchableOpacity
                            style={styles.showContainer}
                            onPress={goToMap}>
                            <OurText style={styles.showButton}>Show map</OurText>
                        </TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <View style={styles.infoContainer}>
                                <OurText style={styles.text}>Клиент: {client}</OurText>
                                <OurText style={styles.text}>Адрес: {addres}</OurText>
                                <OurText style={styles.text}>Дата: {date}</OurText>
                                <OurText style={styles.text}>Телефон: {telephone}</OurText>
                                <View style={styles.titleContainer}>
                                    <TouchableOpacity style={styles.showContainer} onPress={goOrderSet}>
                                        <OurText style={styles.showButton}>Поросмотреть комплект</OurText>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.orderButtonContainer}>
                            {
                                orderCheck ?
                                    <></>
                                    :
                                    <View style={styles.orderButtonContainer}>
                                        <TouchableOpacity style={styles.acceptContainer} onPress={setOrderCheck}>
                                            <OurText style={styles.acceptButton}>Acccept</OurText>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.denyContainer} onPress={setOrderDeny}>
                                            <OurText style={styles.denyButton}>Deny</OurText>
                                        </TouchableOpacity>
                                    </View>
                            }
                        </View>
                    </View>
            }
        </>
    );

}

export default OrdersItem;
