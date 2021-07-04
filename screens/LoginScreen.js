import React from 'react';
import {useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Button,Input,Image} from "react-native-elements"
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView} from "react-native";
const signIn = () =>{

}
const LoginScreen = ({navigation}) =>{
    const [email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    return (//KeyboardAvoidingView : comportement du clavier
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
    <StatusBar style = "light"/>
            <Image source={require('../images/ç!.png',)}
            style ={{width:200,height:200}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text)=>setEmail(text)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text)=>setPassword(text)}/>
                </View>

            <Button containerStyle={styles.button} onPress={signIn} title={"Login"}/>
            <Button onPress={()=> navigation.navigate('Register')} containerStyle={styles.button} type="outline" title={"Register"}/>
            <View style ={{height:100}}/>
        </KeyboardAvoidingView>
    );

};
export default LoginScreen;
const styles = StyleSheet.create({
container:{
    flex:1,
    alignItems:"center", //tout est centré
    justifyContent:"center",
    padding:10,
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