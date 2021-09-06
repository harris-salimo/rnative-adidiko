import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'

const SyncScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 12, marginBottom: 10, textAlign: 'center'}}>Vous êtes connecté. Appuyer sur le bouton ci dessous pour synchroniser avec le serveur.</Text>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Synchroniser</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SyncScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    buttonContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: Dimensions.get('window').width - 200,
        height: 44,
        borderRadius: 50,
        backgroundColor: 'orange',
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    }
})
