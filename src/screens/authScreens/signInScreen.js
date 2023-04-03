import React, {useState, useRef}  from "react";

import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import {colors, parameters, title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'

import {Icon, Button} from 'react-native-elements'

import Header from "../../components/header";

export default function SignInScreen({navigation}){

    const[textInput2Fossued, setTextInput2Fossued] = useState(false)

    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <View>
            <Header title="My Account" type="arrow-left" navigation={navigation}/>

            <View style={{alignItems:"center", padding:10}}>
                <Text style={title}>Sign-In</Text>
            </View>

            <View style={{alignItems:'center', marginTop:10}}>
                <Text style={styles.text1}>Masukan email dan password-mu</Text>
                <Text style={styles.text1}>yang sudah terdaftar</Text>
            </View>

            <View style={{marginTop:20}}>
                <View>
                    <TextInput 
                        style={styles.textInput1}
                        placeholder="Email"
                        ref={textInput1}

                        onFocus={()=>{
                            setTextInput2Fossued(false)
                        }}
                        onBlur={()=>{
                            setTextInput2Fossued(true)
                        }}

                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={styles.textInput2}>
                <Animatable.View>
                    <Icon 
                        name ="lock"
                        iconStyle={{color:colors.grey3}}
                        type ="material"
                    />
                </Animatable.View>
                    <TextInput 
                            style={{width:'80%'}}
                            placeholder="Password"
                            ref={textInput2}

                            value={password}
                            onChangeText={text => setPassword(text)}
                    />
                <Animatable.View animation={textInput2Fossued?"":"fadeInLeft"} duration={400}>
                    <Icon 
                        name ="visibility-off"
                        iconStyle={{color:colors.grey3}}
                        type ="material"
                        style={{marginRight:10}}
                    />
                </Animatable.View>
                </View>
                <View style={{marginHorizontal:20, marginVertical:30}}>
                        <Button
                            title='SIGN-IN'
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}

                            onPress={()=>{navigation.navigate('HomeScreen')}}
                         />
                </View>

                <View style={{alignItems:'center'}}>
                    <Text style={{...styles.text1, textDecorationLine:'underline'}}>Forgot Password?</Text>
                </View>
            </View>

            <View style={{marginLeft:20, marginTop:50}}>
                <Text style={{...styles.text1}}>Baru bergabung?</Text>
            </View>

            <View style={{marginHorizontal:20, marginVertical:10}}>
                <Button
                    title="Buat Akun"
                    buttonStyle={styles.createButton}
                    titleStyle={styles.createButtonTitle}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:11
    },

    text1 :{
        color :colors.grey4,
        fontSize :16
    },

    textInput1:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft:16
    },

    textInput2:{
        borderWidth:1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent:"center",
        alignItems: "center",
        paddingLeft:16
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