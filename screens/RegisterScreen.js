import React, {useLayoutEffect} from 'react';

import { StyleSheet,  View } from 'react-native';
import {useState} from "react";
import {KeyboardAvoidingView} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button,Input, Text} from "react-native-elements";


const RegisterScreen = ({navigation}) =>{
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [imagesUrl,setImageUrl] = useState('');

    useLayoutEffect(()=>{
    navigation.setOptions({
        headerBackTitle:"Back to Login",
    })
    }, [navigation]);

    const register = () =>{};

    return (
        <KeyboardAvoidingView behavior ="padding" style={styles.container}>
            <StatusBar style ="light"/>
        <Text h3 style ={{marginBottom:50}}>Register on OTOCHAIN</Text>
            <View style={styles.inputContainer}>
<Input placeholder="Full name" autofocus type='text' value={name} onChangedText={ text => setName(text)}/>
                <Input placeholder="Email"  type='email' value={email} onChangedText={ text => setEmail(text)}/>
                <Input placeholder="Password"  type='password' secureTextEntry value={password} onChangedText={ text => setPassword(text)}/>

                <Input placeholder="Profile Picture URL (optional)"  type='text' value={imagesUrl} onChangedText={ text => setImageUrl(text)}
                onSubmitEditing={register}/>
            </View>
            <Button
                raised onPress={register} title = 'Register'/>
            <View style ={{height:100}}/>
        </KeyboardAvoidingView>
    );

};
export default RegisterScreen;
const styles = StyleSheet.create({
container:{
flex: 1,
    alignItems:"center", //tout est centré
    justifyContent:"center",
    padding:10,
    backgroundColor:"white",
},
    inputContainer:{
        width:300, //la largeur des cases d'input

    },
button:{
    width:200, //largeur des bouttons
    marginTop:10,
    color:"#99991a",
},

});