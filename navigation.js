import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from "./components/Login/Login";
import MapItem from "./MapItem";
import Register from "./components/Register/Register";
import Orders from "./components/Orders/Orders"
import ProfilePage from "./components/ProfilePage/index"

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
                name="Register"
                component={Register} />
            <Screen
                name="Orders"
                component={Orders} />
            <Screen
                name="ProfilePage"
                component={ProfilePage} />
        </Navigator>
    );
};

export default AppStackNavigator;

