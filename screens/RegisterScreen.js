import React, {useLayoutEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {useState} from "react";
import {KeyboardAvoidingView} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button, Input, Text} from "react-native-elements";
import {auth} from "../firebase";

const RegisterScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
            .then((authUser) =>{
                authUser.user.updateProfile({
                    displayName : name,
                    photoURL: imageUrl || '../images/logo.png',
                });

            })
            .catch((error)=>alert(error.message));

    };

    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={{marginBottom: 50}}>Register on OTOCHAIN</Text>
            <View style={styles.inputContainer}>
                <Input placeholder="Full name" autoFocus type='text' value={name}
                       onChangeText={(text) => setName(text)}/>
                <Input placeholder="Email" type='email' value={email} onChangeText={(text) => setEmail(text)}/>
                <Input placeholder="Password" type='password' secureTextEntry value={password}
                       onChangeText={(text) => setPassword(text)}/>

                <Input placeholder="Profile Picture URL (optional)" type='text' value={imageUrl}
                       onChangeText={(text )=> setImageUrl(text)}
                       onSubmitEditing={register}/>
            </View>
            <Button containerStyle={styles.button}
                    raised onPress={register} title='Register'/>
            <View style={{height: 100}}/>
        </KeyboardAvoidingView>
    );

};
export default RegisterScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center", //tout est centré
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
    },
    inputContainer: {
        width: 300, //la largeur des cases d'input

    },
    button: {
        width: 200, //largeur des bouttons
        marginTop: 10,
        color: "#99991a",
    },

});