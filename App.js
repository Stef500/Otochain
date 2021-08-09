import 'react-native-gesture-handler';
import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AntDesign,Entypo, FontAwesome, Ionicons} from "@expo/vector-icons";
import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";
import Menu from "./screens/Menu";
import Search from "./Yt_ API/Search";
import IAScreen from "./screens/IAScreen";
import CameraScreen from "./screens/CameraScreen";
const Stack = createStackNavigator();
const GlobalTabNavigator = createBottomTabNavigator();
const globalScreenOptions = {
    headerStyle: {backgroundColor: "#FFA500"},
    headerTitleStyle: {color: "white"},
    headerTintColor: "black",
    headerBackTitle: "white",


}
export default function App() {

    return(
        <NavigationContainer>
        <GlobalTabNavigator.Navigator>
            <GlobalTabNavigator.Screen
                options={{tabBarIcon:()=> <Entypo name="chat" size={24} color="black" />}}
                name={"Chat"} component={menuStackChat}/>
            <GlobalTabNavigator.Screen
                options={{tabBarIcon:()=> <Entypo name="folder-video" size={24} color="black" />}}
                name={"Search"} component={Search}/>
            <GlobalTabNavigator.Screen
                options={{tabBarIcon:()=> <AntDesign name="medicinebox" size={24} color="black" />}}
                name={"IAScreen"} component={IAScreen}/>
        </GlobalTabNavigator.Navigator>
        </NavigationContainer>
    );

}
function menuStackChat(){
    return ( //initialRouteName="Home"
            <Stack.Navigator  screenOptions={globalScreenOptions}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="CameraScreen" component={CameraScreen}/>
                <Stack.Screen name="Menu" component={Menu}/>
                <Stack.Screen name="Register" component={RegisterScreen}/>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddChat" component={AddChatScreen} />
                <Stack.Screen name="Chat" component={ChatScreen} />
            </Stack.Navigator>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
