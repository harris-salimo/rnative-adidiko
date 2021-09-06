import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import {PieChart} from 'react-native-chart-kit'

const AdidyByDistrictScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'white', height: 130, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5, padding: 10}}>
                <Text style={{fontSize: 15}}>Volana</Text>
            </View>
            <View style={{backgroundColor: 'white', height: 450, width: Dimensions.get('window').width - 50, marginVertical: 10, borderRadius: 5}}>
                <View style={{backgroundColor: 'darkorange', height: 50, width: Dimensions.get('window').width - 50, padding: 10, justifyContent: 'center'}}>
                    <Text style={{color: 'white'}}>Toe-bolan'ny kartie nandritry ny volana</Text>
                </View>
                <PieChart
                    data={[
                        { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
                        { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
                    ]}
                    width={Dimensions.get('window').width - 50}
                    height={220}
                    chartConfig={{
                        backgroundColor: '#e26a00',
                        backgroundGradientFrom: '#fb8c00',
                        backgroundGradientTo: '#ffa726',
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="20"
                />
            </View>
        </View>
    )
}

export default AdidyByDistrictScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
