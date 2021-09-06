import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import BottomTabNavigator from './BottomTabNavigator'
import {MpandrayStackNavigator, AdidyStackNavigator} from './StackNavigator'
import SettingsScreen from '../screens/SettingsScreen'
import SyncScreen from '../screens/SyncScreen'

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Acceuil" component={HomeScreen}/>
            <Drawer.Screen name="Toe-Bola" component={BottomTabNavigator}/>
            <Drawer.Screen name="Mpandray" component={MpandrayStackNavigator}/>
            <Drawer.Screen name="Adidy" component={AdidyStackNavigator}/>
            <Drawer.Screen name="Paramètres" component={SettingsScreen}/>
            <Drawer.Screen name="Sync" component={SyncScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
