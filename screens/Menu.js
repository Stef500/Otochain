import React from 'react';
import {useEffect ,useState} from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Button,Input,Image} from "react-native-elements"
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView} from "react-native";
import {auth} from "../firebase"

const Menu = ({navigation}) =>{

    const LaunChat = () =>{
        navigation.replace("Home");
    };
    const LaunchSearch = () =>{
        navigation.replace("Search");
    };

    return (//KeyboardAvoidingView : comportement du clavier
        <View style={styles.inputContainer}>
            <Button containerStyle={styles.button} onPress={LaunchSearch} title={"Apprentissage Vidéo"}/>
            <Button containerStyle={styles.button} onPress={LaunChat} title={"Chat"}/>
        </View>
    );

};
export default Menu;
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center", //tout est centré
        justifyContent:"center",
        padding:10,
    },
    button:{
        width:200, //largeur des bouttons
        marginTop:10,
        color:"#99991a",

    },


});