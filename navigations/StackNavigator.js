import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MpandrayAddScreen from '../screens/MpandrayAddScreen';
import MpandrayListScreen from '../screens/MpandrayListScreen';
import AdidyAddScreen from '../screens/AdidyAddScreen';
import AdidyListScreen from '../screens/AdidyListScreen';
import BottomTabNavigator from '../navigations/BottomTabNavigator';
import SyncScreen from '../screens/SyncScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Toe-bola" component={BottomTabNavigator}/>
            <Stack.Screen name="Mpandray" component={MpandrayListScreen}/>
            <Stack.Screen name="Adidy" component={AdidyListScreen}/>
            <Stack.Screen name="Sync" component={SyncScreen}/>
            <Stack.Screen name="Parametres" component={SettingsScreen}/>
        </Stack.Navigator>
    )
}

export const MpandrayStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="MpandrayList" component={MpandrayListScreen}/>
            <Stack.Screen name="MpandrayAdd" component={MpandrayAddScreen}/>
        </Stack.Navigator>
    )
}

export const AdidyStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AdidyList" component={AdidyListScreen}/>
            <Stack.Screen name="AdidyAdd" component={AdidyAddScreen}/>
        </Stack.Navigator>
    )
}

export default MainStackNavigator