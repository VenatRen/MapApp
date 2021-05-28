import React, { useLayoutEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';
import styles from "./styles";
import OrdersItem from "./OrdersItem";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton } from "../../components/Header/index";

const Orders = (props, data) => {


    const renderItemsBlock = ({item, index}) => {
        return (
            <OrderItem navigation={navigation} data={item}/>
        );
    };

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
        <FlatList
            data={data}
            renderItem={renderItemsBlock}
            keyExtractor={(item, index) => String(index)}
        />
    );

}





export default Orders;
