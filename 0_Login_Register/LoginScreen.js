import React from 'react';
import {useEffect, useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input, Image} from "react-native-elements"
import {StatusBar} from "expo-status-bar";
import {KeyboardAvoidingView} from "react-native";
import {auth} from "../firebase"

const LoginScreen = ({navigation}) => {
    //NB: j'ai ici viré les utilisations abusives du states ci-dessous.
    //const [email,setEmail]=useState("");
    //const[password,setPassword]=useState("");
    let email;
    let password;


    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch((error) => alert(error));
        //firebase.auth.signInWithEmailAndPassword:
        //"Sign in" asynchrone avec mail et password.
    };

    const _onChangeEmail = (emailText) => {
        email = emailText;
    }

    const _onChangePassword = (passwordText) => {
        password = passwordText;
    }
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            //firebase.auth.onAuthStateChange:
            //Ajoute un observateur pour
            // les changmeents d'etat de "sign in de" l'utilisateur
            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, []);

    return (//KeyboardAvoidingView : comportement du clavier
        <KeyboardAvoidingView behavior='padding' enabled style={styles.container}>
            <StatusBar style="light"/>
            <Image source={require('../images/logo.png',)}
                   style={{width: 200, height: 200}}/>
            <View style={styles.inputContainer}>
                <Input placeholder="Email" autoFocus type="email" value={email}
                       onChangeText={(emailText) => _onChangeEmail(emailText)}/>
                <Input placeholder="Password" secureTextEntry type="password" value={password}
                       onChangeText={(passwordText) => _onChangePassword(passwordText)}
                       onSubmitEditing={signIn}/>
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title={"Login"}/>
            <Button onPress={() => navigation.navigate('Register')} containerStyle={styles.button} type="outline"
                    title={"Register"}/>
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    );

};
export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", //tout est centré
        justifyContent: "center",
        padding: 10,
    },
    inputContainer: {
        marginTop: 50,
        width: 300, //la largeur des cases d'input

    },
    button: {
        width: 200, //largeur des bouttons
        marginTop: 10,
        color: "#99991a",

    },
});