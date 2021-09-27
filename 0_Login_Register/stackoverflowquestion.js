import React from 'react';
import {
    View,
    KeyboardAvoidingView,
    TextInput,
    StyleSheet,
    Text,
    Platform,
    TouchableWithoutFeedback,
    Button,
    Keyboard
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

const KeyboardAvoidingComponent = () => {
    return (


        <View style={styles.inner}>

            <KeyboardAwareScrollView>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>


                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

                    <TextInput placeholder="Username" style={styles.textInput}/>
                </TouchableWithoutFeedback>

            </KeyboardAwareScrollView>
            <View style={styles.btnContainer}>
                <Button title="Submit" onPress={() => null}/>
            </View>
        </View>


    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12
    }
});

export default KeyboardAvoidingComponent;