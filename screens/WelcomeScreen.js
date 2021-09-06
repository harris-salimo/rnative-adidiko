import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const WelcomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{position: 'absolute', top: 90, left: 15, right: 15}}>
                <Text style={{fontSize: 30, marginBottom: 5, color: 'white'}}>Tongasoa!</Text>
                <Text style={{fontSize: 12, marginBottom: 5, color: 'white'}}>eto amin'ny fitaovam-pandrindrana ny adidim-piangonanan'ny</Text>
                <Text style={{fontSize: 15, color: 'white'}}>FJKM Ambalavao Fianarantsoa</Text>
            </View>
            <TouchableOpacity style={{position: 'absolute', bottom: 30, backgroundColor: 'white', padding: 5, borderRadius: 50, width: 50, alignItems: 'center'}} onPress={() => navigation.navigate('Login')}>
                <FontAwesome name="angle-down" size={40} color={'orange'}/>
            </TouchableOpacity>
        </View>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
      },
})
