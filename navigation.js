
import React from "react";
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Main from "./Main";

const { Navigator, Screen } = createNativeStackNavigator();

const AppStackNavigator = () => {

   
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
            
        </Navigator>
    );
};

export default AppStackNavigator;

