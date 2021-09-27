import React, {useLayoutEffect} from 'react';

import {StyleSheet, View} from 'react-native';
import {useState} from "react";
import {KeyboardAvoidingView} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Button, Input, Text} from "react-native-elements";
import {auth} from "../firebase";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


const RegisterScreen = ({navigation}) => {
    //NB: j'ai ici viré les utilisations abusives du states ci-dessous (Les 4 fonctions plus bas sont à reunir en une seule fonction):
    //const [name, setName] = useState('');
    //const [email, setEmail] = useState('');
    //const [password, setPassword] = useState('');
    //const [imageUrl, setImageUrl] = useState('');

    let name;
    let email;
    let password;
    let imageUrl;


    const _onChangeName = (nameText) => {
        name = nameText;
        console.log(name);
    }

    const _onChangeEmail = (emailText) => {
        email = emailText;
        console.log(email);
    }

    const _onChangePassword = (passwordText) => {
        password = passwordText;
        console.log(password);
    }

    const _onChangeImageURL = (imageURLText) => {
        imageUrl = imageURLText;
        console.log(imageURLText);
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Back to Login",
        });
    }, [navigation]);

    const register = () => {
        //firebase.auth.createUserWithEmailAndPassword(email,password)
        //fabrique un nouvel account utilisateur associé au mail et au password
        //En case de réussite de création de compte, l'utilisateur sera egalement
        //Signed in dans l'application (enregistré)
        //La création du compte peut échouer si le compte existe ou le password
        //est invalide
        auth.createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                authUser.user.updateProfile({
                    displayName: name,
                    photoURL: imageUrl || '../images/logo.png',
                });
            })
            .catch((error) => alert(error.message));
    };

    return (//style={styles.inputAllContainer}
        <KeyboardAwareScrollView>
            <View behavior="padding" enabled style={styles.container}>
                <StatusBar style="light"/>
                <Text h3 style={{marginBottom: 50}}>Register on OTOCHAIN</Text>
                <Input style={styles.inputOneContainer} placeholder="Full name" autoFocus type='text' value={name}
                       onChangeText={(text) => _onChangeName(text)}/>
                <Input style={styles.inputOneContainer} placeholder="Email" type='email' value={email}
                       onChangeText={(text) => _onChangeEmail(text)}/>
                <Input style={styles.inputOneContainer} placeholder="Password" type='password' secureTextEntry
                       value={password}
                       onChangeText={(text) => _onChangePassword(text)}/>
                <Input style={styles.inputOneContainer} placeholder="Profile Picture URL (optional)" type='text'
                       value={imageUrl}
                       onChangeText={(text) => _onChangeImageURL(text)}
                       onSubmitEditing={register}/>
                <Button containerStyle={styles.button}
                        raised onPress={register} title='Register'/>
            </View>

            <View style={{height: 100}}/>
        </KeyboardAwareScrollView>
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
    inputAllContainer: {
        flex: 1,
        marginTop: 50,
        justifyContent: "space-around",

        width: 300, //la largeur des cases d'input

    },
    inputOneContainer: {
        height: 40,
        borderColor: "#000000",
        //borderBottomWidth: 1,
        //marginBottom: 36,
        width: 500,
    },
    button: {
        width: 200, //largeur des bouttons
        marginTop: 10,
        color: "#99991a",

    },

});