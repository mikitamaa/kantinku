import React, {useState, useRef}  from "react";

import { View, Text, StyleSheet, Dimensions, TextInput, Image } from "react-native";
import {colors, parameters, title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'

import Swiper from 'react-native-swiper'
import {Icon, Button} from 'react-native-elements'

import Header from "../../components/header";

export default function SignInWelcomeScreen({navigation}){
    return(
        <View style={{flex:1}}>
            <View style={{flex:3, justifyContent:'flex-start', alignItems:'center', paddingTop:20, }}>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold', paddingTop:50}}>Temukan Kantin</Text>
                <Text style={{fontSize:26, color:colors.buttons, fontWeight:'bold'}}>di Sekitar Mu!</Text>
            </View>

            <View style={{flex:4, justifyContent:"center"}}>
                <Swiper autoplay={true}>
                    <View style={styles.slide1}>
                        <Image 
                            source = {{uri:'https://www.mercycollegebelfast.com/wp-content/uploads/2021/04/Mercy-College-Canteen.jpg'}}
                            style ={{height:"100%", width:'100%'}}
                        />
                    </View>

                    <View style={styles.slide2}>
                        <Image 
                            source = {{uri:'https://ditsp.itb.ac.id/wp-content/uploads/sites/13/2022/10/batch_01-Kantin-East-Corner-5.jpg'}}
                            style ={{height:"100%", width:'100%'}}
                        />
                    </View>

                    <View style={styles.slide3}>
                        <Image 
                            source = {{uri:'https://ditsp.itb.ac.id/wp-content/uploads/sites/13/2022/10/batch_04-Kantin-GKU-Barat-2.jpg'}}
                            style ={{height:"100%", width:'100%'}}
                        />
                    </View>
                </Swiper>
            </View>

            <View style ={{flex:4, justifyContent:"flex-end"}}>
                <View style={{marginHorizontal:20, marginVertical:10}}>
                    <Button
                        title='SIGN-IN'
                        buttonStyle={parameters.styledButton}
                        titleStyle={parameters.buttonTitle}

                        onPress={()=>{
                            navigation.navigate('SignInScreen')}
                        }
                    />
                </View>
                <View style={{marginHorizontal:20, marginBottom:10}}>
                    <Button
                        title="Buat Akun"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
            </View>
            </View>

        </View>

    
    )
}

const styles = StyleSheet.create({
    slide1:{
        felx: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#90D6EB' 
    },

    slide2:{
        felx: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#97CAE5' 
    },

    slide1:{
        felx: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#92B8D9' 
    },

    createButton:{
        backgroundColor:'white',
        alignContent:'center',
        justifyContent:'center',
        borderRadius:12,
        borderWidth:1,
        borderColor:"#cb202d",
        height:40,
        paddingHorizontal:20,
        width:'100%'
    },

    createButtonTitle:{
        color:"#cb202d",
        fontSize:16,
        fontWeight:'bold',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-3
    }
})