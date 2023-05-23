import React, {useState} from "react";

import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import {Icon} from "react-native-elements";
import { colors } from "../global/styles";
import HomeHeader from "../components/homeHeader";
import { FlatList } from "react-native-gesture-handler";
import { restaurantData } from "../global/data"; 
import FoodCard from "../components/foodCard";
import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get('window').width
export default function HomeScreen(){
    const [delivery, setDelivery] = useState(true)
    return(
        <View style={styles.container}>
            <HomeHeader />
            <ScrollView
            >
                <View>
                    <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
                        <TouchableOpacity
                            onPress={()=>{setDelivery(true)}}
                        >
                            <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.buttons:colors.grey4}}>
                                <Text style={{...styles.deliveryText, color:delivery?"white":"black", fontWeight:"bold"}}>Pesan</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={()=>{setDelivery(false)}}
                        >
                            <View style={{...styles.deliveryButton, backgroundColor:delivery?colors.grey4:colors.buttons}}>
                                <Text style={{...styles.deliveryText, color:delivery?"black":"white", fontWeight:"bold"}}>PesananKu</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            
                <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-between", paddingVertical:10, paddingRight:20, paddingLeft:40}}>
                    <View style={{flexDirection:"row", backgroundColor:colors.grey5, borderRadius:15, paddingVertical:5}}>
                        <View style={{flexDirection:"row", alignItems:"center", paddingHorizontal:10}}>
                            <Icon 
                                type="material-community"
                                name="map-marker"
                                color= {colors.grey1}
                                size={26}
                            />

                            <Text style={{marginLeft:5}}>Labtek V ITB</Text>
                        </View>
                    </View>
                    

                    <View style={{flexDirection:"row", backgroundColor:colors.grey5, borderRadius:15, paddingHorizontal:10}}>
                        <Icon 
                            type="material-community"
                            name="tune"
                            color= {colors.grey1}
                            size={26}
                        />
                    </View>
                </View>

                <View style={{marginLeft:15, marginTop:20}}>
                    <Text style={styles.headerText}>Pesan Sekarang!</Text>
                </View>

                <View style={{marginRight:10}}>
                    <FlatList 
                        style={{marginTop:10, marginBottom:10}}
                        horizontal={true}
                        data={restaurantData}
                        keyExtractor={(item, index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=>(
                            <View>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH*0.8}
                                    image={item.images}
                                    restaurantName={item.restaurantName}
                                    distance={item.distance}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>)}
                    />
                </View>

                <View style={{marginLeft:15, marginTop:20}}>
                    <Text style={styles.headerText}>Promo!</Text>
                </View>

                <View style={{marginRight:10}}>
                    <FlatList 
                        style={{marginTop:10, marginBottom:10}}
                        horizontal={true}
                        data={restaurantData}
                        keyExtractor={(item, index)=>index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item})=>(
                            <View>
                                <FoodCard 
                                    screenWidth = {SCREEN_WIDTH*0.8}
                                    image={item.images}
                                    restaurantName={item.restaurantName}
                                    distance={item.distance}
                                    averageReview={item.averageReview}
                                    numberOfReview={item.numberOfReview}
                                />
                            </View>)}
                    />
                </View>

            <View style={{marginLeft:15, marginTop:20}}>
                <Text style={styles.headerText}>Di Dekatmu</Text>
            </View>
            <View style={{width:SCREEN_WIDTH, paddingTop:10}}>
                {
                    restaurantData.map(item =>(
                        <View key={item.id} style={{paddingBottom:20}}>
                            <FoodCard 
                                screenWidth = {SCREEN_WIDTH*0.95}
                                image={item.images}
                                restaurantName={item.restaurantName}
                                distance={item.distance}
                                averageReview={item.averageReview}
                                numberOfReview={item.numberOfReview}
                            />
                        </View>
                    ))
                }
            </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1
    },

    deliveryButton:{
        paddingHorizontal:20,
        borderRadius:15,
        paddingVertical:5
    },

    deliveryText:{
        marginLeft:5,
        fontSize:16
    },

    headerText:{
        fontSize:25, 
        fontWeight:"bold"
    }
})