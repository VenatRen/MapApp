import React, { useLayoutEffect } from 'react';
import { ScrollView, FlatList } from 'react-native';
import { HeaderBackButton, HeaderTitle, HeaderProfieButton } from "../../Header/index";
import { GET_ORDERS_LIST } from "../../../apollo/queries";
import { useQuery } from "@apollo/client";

const Orders = (props) => {



    const { navigation } = props;
    const abortController = new AbortController();

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

    const { data } = useQuery(GET_ORDERS_LIST);


    console.log(data);

    return (
        <FlatList
            data={data?.orders?.nodes}
            renderItem={({ item }) => <CategoryItem navigation={navigation}
                date={item.date} />}
            keyExtractor={(item, index) => String(index)}
        />
    );

}





export default Orders;
