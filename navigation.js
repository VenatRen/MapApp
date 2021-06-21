import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from "./components/pages/Login/Login";
import MapItem from "./MapItem";
import Orders from "./components/pages/Orders/Orders";
import OrderSet from "./components/pages/OrderSet/OrderSet";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStackNavigator = (props) => {

    return (
        <Navigator
            initialRouteName="Main"
            backBehavior="history"
            mode='modal'
            headerMode='screen'
            defaultNavigationOptions={{
                tabBarVisible: true,
                headerHideShadow: true,
            }}>
            <Screen
                name="Login"
                component={Login} />
            <Screen
                name="MapItem"
                component={MapItem} />
            <Screen
                name="Orders"
                component={Orders} />
            <Screen 
                name="OrderSet"
                component={OrderSet}
            />
        </Navigator>
    );
};

export default AppStackNavigator;

