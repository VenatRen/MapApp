
import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Login from "./Login";
import MapItem from "./MapItem";
import Register from "./Register";

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
                component={Login}/>
            <Screen 
                name="MapItem"
                component={MapItem}/>
            <Screen 
                name="Register"
                component={Register}/>
            
            
        </Navigator>
    );
};

export default AppStackNavigator;

