import React from "react";

import {createStackNavigator, TransitionPresets} from '@react-navigation/stack'
import SignInWelcomeScreen from "../screens/authScreens/signInWelcomeScreen";
import SignInScreen from "../screens/authScreens/signInScreen";
import HomeScreen from "../screens/homeScreen";
import RootClientTab from "./ClientTab";

const Auth = createStackNavigator();

export default function AuthStack(){
    return(
        <Auth.Navigator>
            {/*<Auth.Screen 
                name = 'SignInWelcomeScreen'
                component = {SignInWelcomeScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />

            <Auth.Screen 
                name = 'SignInScreen'
                component = {SignInScreen}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />*/}

            <Auth.Screen 
                name = 'RootClientTabs'
                component = {RootClientTab}
                options = {{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </Auth.Navigator>
    )
}