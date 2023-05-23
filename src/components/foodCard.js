import React, {useState} from "react";

import {View, Text, StyleSheet, TouchableOpacity, Dimensions, Image} from 'react-native'
import {Icon} from "react-native-elements";
import { colors, parameters } from "../global/styles";

export default function FoodCard({
    OnPressFoodCard,
    restaurantName,
    distance,
    image,
    averageReview,
    numberOfReview,
    foodType,
    screenWidth
}){
    return(
        <TouchableOpacity>
            <View style={{...styles.cardView, width:screenWidth}}>
                <Image 
                    style = {{...styles.image, width:screenWidth}}
                    source = {{uri:image}}
                />

                <View>
                    <Text style = {styles.restaurantName}>{restaurantName}</Text>
                </View>

                <View style={{flex:1, flexDirection:"row", alignItems:"center"}}>
                    <View style={{...styles.distance}}>
                        <Icon 
                            name="place"
                            type="material"
                            color={colors.grey2}
                            size={18}
                        />
                        <Text style={{...styles.Min}}>{distance} Min</Text>
                    </View>
                </View>

                <View style={styles.review}>
                    <Text style = {styles.average}>{averageReview}</Text>
                    <Text style={{color:"white"}}>{numberOfReview} reviews</Text>
                </View>
            </View>
        </TouchableOpacity>        
)}

const styles = StyleSheet.create({
    cardView:{
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor:colors.grey4,
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5
    },
    image:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        height:150
    },

    restaurantName:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.grey1,
        marginTop:5,
        marginLeft:10
    },

    distance:{
        flex:4,
        flexDirection:"row",
        borderRightColor:colors.grey4,
        paddingHorizontal:5,
        borderRightWidth:1
    },

    Min:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:colors.grey3
    },

    review:{
        position:"absolute",
        top:0,
        right:10,
        backgroundColor:'rgba(52, 52, 52, 0.3)',
        padding:2,
        alignItems:"center",
        justifyContent:"center",
        borderTopRightRadius:5,
        borderBottomRightRadius:12
    },
    average:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        marginTop:-3
    }
})