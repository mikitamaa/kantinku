import React from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import HomeScreen from "../screens/homeScreen";
import OrderScreen from "../screens/OrderScreen";
import MyAccountScreen from "../screens/MyAccountScreen";
import SearchScreen from "../screens/SearchScreen";

const ClientTabs = createBottomTabNavigator();

export default function RootClientTab(){

    return(
        <ClientTabs.Navigator
            screenOptions = {{
            tabBarActiveTintColor :colors.buttons
        }}
        >
                        <ClientTabs.Screen 
                name ="HomeScreen"
                component ={HomeScreen}
                options ={
                    {
                        tabBarLabel : "Home",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='home'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />

            
            <ClientTabs.Screen 
                name ="SearchScreen"
                component ={SearchScreen}
                options ={
                    {
                        tabBarLabel : "Search",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='search'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyOrdersScreen"
                component ={OrderScreen}
                options ={
                    {
                        tabBarLabel : "My Orders",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='view-list'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />



        <ClientTabs.Screen 
                name ="MyAccount"
                component ={MyAccountScreen}
                options ={
                    {
                        tabBarLabel : "My Account",
                        tabBarIcon: ({color,size})=>(
                            <Icon 
                                name ='person'
                                type = 'material'
                                color ={color}
                                size ={size}
                            />
                        ),
                        headerShown: false
                    }
                }

            />
        </ClientTabs.Navigator>
    )
}

