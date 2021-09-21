import React, {useLayoutEffect} from 'react';
import {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Button, Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
import {auth, db} from "../firebase";
///import {create} from "react-native/test/renderer";


const AddChatScreen = ({navigation}) => {
    //NB: j'ai ici viré les utilisations abusives du states ci-dessous,
    // const [input, setInput] = useState("");

    let input;
    const _onChangeInput = (inputText) => {
        input = inputText;
    }


    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats",
        })
    }, [navigation]);

    const createChat = async () => {//ajout d'un chats dans les collecctions de firebase (fonctionnel)
        await db.collection('chats').add({
            chatName: input,
        }).then(() => {
            navigation.goBack()
        }).catch((error) => alert(error));
    }

    return (//KeyboardAvoidingView : comportement du clavier
        <View styles={styles.container}>
            <Input placeholder={"Enter a chat name"}
                   value={input}
                   onChangeText={(text) => _onChangeInput(text)}
                   onSubmitEditing={createChat}
                   leftIcon={
                       <Icon name="wechat" type="antdesign" size={24} color="black"/>
                   }/>
            <Button onPress={createChat} title='Create new Chat'/>
        </View>
    );

};
export default AddChatScreen;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    },
});