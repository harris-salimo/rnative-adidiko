import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

const AdidyByMpandrayScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'white', height: 70, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, padding: 5}}>
                <View style={{borderWidth: 1, borderColor: 'orange', height: 60, width: Dimensions.get('window').width - 60, borderRadius: 5, padding: 20}}>
                    <Text style={{fontSize: 15}}>34H - John Doe</Text>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 330, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, padding: 5}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Jan</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Fev</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Mar</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>Apr</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'orange', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>May</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Jon</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Jol</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Aog</Text>
                    </View>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Sep</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Okt</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Nov</Text>
                    </View>
                    <View style={{height: 80, width: (Dimensions.get('window').width - 60) / 4, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{color: 'orange', fontSize: 15, fontWeight: 'bold'}}>Des</Text>
                    </View>
                </View>
                <View style={{height: 80, flexDirection: 'row'}}>
                    <View style={{width: (Dimensions.get('window').width - 60) / 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{height: 10, width: 10, backgroundColor: 'orange', marginRight: 10}}></View>
                        <Text>Adidy efa vita</Text>
                    </View>
                    <View style={{width: (Dimensions.get('window').width - 60) / 2, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{height: 10, width: 10, backgroundColor: 'white', marginRight: 10, borderWidth: 1, borderColor: 'orange'}}></View>
                        <Text>Adidy mbola tsy vita</Text>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 70, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, flexDirection: 'row', padding: 10}}>
                <View style={{backgroundColor: 'orange', borderRadius: 50, marginHorizontal: 10, width: 50, padding: 10}}>
                    <FontAwesome name='envelope-open' size={30} color="white" />
                </View>
                <View>
                    <Text>Fitambaran'ny adidy vita</Text>
                    <Text style={{fontSize: 20, color: 'orange'}}>15,000 Ar</Text>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 70, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, flexDirection: 'row', padding: 10}}>
                <View style={{backgroundColor: 'orange', borderRadius: 50, marginHorizontal: 10, width: 50, padding: 10}}>
                    <FontAwesome name='percent' size={30} color="white" />
                </View>
                <View>
                    <Text>Taham-pahavitrihana</Text>
                    <Text style={{fontSize: 20, color: 'orange'}}>77 %</Text>
                </View>
            </View>
        </View>
    )
}

export default AdidyByMpandrayScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
