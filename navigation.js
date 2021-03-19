
import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Main from "./Main";
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
                name="Main"
                component={Main}/>
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

