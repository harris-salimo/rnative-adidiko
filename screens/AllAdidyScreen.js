import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import {LineChart} from 'react-native-chart-kit'

const AllAdidyScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'orange', height: 420, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5}}>
                <View style={{backgroundColor: 'darkorange', height: 50, width: Dimensions.get('window').width - 50, padding: 10, justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Toe-bola nandritry ny taona</Text>
                </View>
                <LineChart
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jon', 'Jol', 'Aog', 'Sep', 'Okt', 'Nov', 'Des'],
                        datasets: [{
                        data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }]
                    }}
                    width={Dimensions.get('window').width - 50} // from react-native
                    height={290}
                    chartConfig={{
                        backgroundColor: 'orange',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    style={{
                        marginVertical: 8
                    }}
                    fromZero={true}
                />
                <View style={{backgroundColor: 'darkorange', height: 80, width: Dimensions.get('window').width - 50, flexDirection: 'row'}}>
                    <View style={{width: (Dimensions.get('window').width - 50) / 2, flexDirection: 'row', padding: 10}}>
                        <FontAwesome name='arrow-up' size={25} color="green" style={{marginVertical: 10}} />
                        <View style={{marginLeft: 10, marginVertical: 10}}>
                            <Text style={{marginBottom: 10, color: 'white'}}>Ambony indrindra</Text>
                            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Des</Text>
                        </View>
                    </View>
                    <View style={{width: (Dimensions.get('window').width - 50) / 2, flexDirection: 'row', padding: 10}}>
                        <FontAwesome name='arrow-down' size={25} color="yellow" style={{marginVertical: 10}} />
                        <View style={{marginLeft: 10, marginVertical: 10}}>
                            <Text style={{marginBottom: 10, color: 'white'}}>Ambany indrindra</Text>
                            <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>Feb, Jon</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 70, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, flexDirection: 'row', padding: 10}}>
                <View style={{backgroundColor: 'orange', borderRadius: 50, marginHorizontal: 10, width: 50, padding: 10}}>
                    <FontAwesome name='envelope-open' size={30} color="white" />
                </View>
                <View>
                    <Text>Fitambaran'ny adidy vita</Text>
                    <Text style={{fontSize: 20, color: 'orange'}}>1,950,700 Ar</Text>
                </View>
            </View>
            <View style={{backgroundColor: 'white', height: 70, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, flexDirection: 'row', padding: 10}}>
                <View style={{backgroundColor: 'orange', borderRadius: 50, marginHorizontal: 10, width: 50, padding: 10}}>
                    <FontAwesome name='percent' size={30} color="white" />
                </View>
                <View>
                    <Text>Taham-pahavitrihana</Text>
                    <Text style={{fontSize: 20, color: 'orange'}}>45 %</Text>
                </View>
            </View>
        </View>
    )
}

export default AllAdidyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
