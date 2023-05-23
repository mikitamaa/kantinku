import React, {useState, useRef}  from "react";

import { View, Text, StyleSheet, Dimensions, TextInput } from "react-native";
import {colors, parameters, title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {Icon, Button} from 'react-native-elements'

import { auth } from "../../../config/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import Header from "../../components/header";
import RootClientTab from "../../navigation/ClientTab";

    
export default function SignInScreen({navigation}){
    const[isSignIn, setIsSignedIn] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true)
        })
        .catch((re) => {
            console.log(re);
        })
    }

    const signInUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((re) => {
            console.log(re);
            setIsSignedIn(true)
        })
        .catch((re) => {
            console.log(re);
        })

        navigation.navigate('RootClientTab')
    }

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
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>

                <View style={styles.textInput2}>
                    <TextInput 
                            style={{width:'80%'}}
                            placeholder="Password"
                            value={password}
                            onChangeText={text => setPassword(text)}
                    />
                </View>

                <View style={{marginHorizontal:20, marginVertical:30}}>
                        <Button
                            title='SIGN-IN'
                            buttonStyle={parameters.styledButton}
                            titleStyle={parameters.buttonTitle}

                            onPress={signInUser}
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

                    onPress={signUp}
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