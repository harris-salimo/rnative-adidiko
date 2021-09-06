import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Toe-bola')}>
                    <FontAwesome style={{marginBottom: 5}} name="money" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Toe-bola</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Mpandray')}>
                    <FontAwesome style={{marginBottom: 5}} name="users" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Mpandray</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Adidy')}>
                    <FontAwesome style={{marginBottom: 5}} name="envelope-open" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Adidy</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Sync')}>
                    <FontAwesome style={{marginBottom: 5}} name="cloud" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Sync</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Parametres')}>
                    <FontAwesome style={{marginBottom: 5}} name="cog" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Paramètres</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignItems: 'center', justifyContent: 'center', padding: 15}} onPress={() => navigation.navigate('Login')}>
                    <FontAwesome style={{marginBottom: 5}} name="sign-out" size={50} color={'orange'}/>
                    <Text style={{color: 'orange'}}>Hivoaka</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
