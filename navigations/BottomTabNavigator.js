import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import AllAdidyScreen from '../screens/AllAdidyScreen'
import AdidyByDistrictScreen from '../screens/AdidyByDistrictScreen'
import AdidyByMpandrayScreen from '../screens/AdidyByMpandrayScreen'

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, size, color}) => {
                    let iconName;
                    
                    if(route.name === 'Toe-bola rehetra'){
                        iconName = 'line-chart';
                        color = focused ? 'orange' : 'white';
                    } else if(route.name === 'Kartie'){
                        iconName = 'map-marker';
                    } else if(route.name === 'Mpandray'){
                        iconName = 'users';
                    }

                    return (
                        <FontAwesome name={iconName} size={20} color={color} />
                    );
                }
            })}
            tabBarOptions={{
                activeTintColor: 'orange',
                inactiveTintColor: 'white',
                activeBackgroundColor: 'white',
                inactiveBackgroundColor: 'orange',
                labelStyle: {
                    fontSize: 12
                }
            }}
        >
            <Tab.Screen name="Toe-bola rehetra" component={AllAdidyScreen}/>
            <Tab.Screen name="Kartie" component={AdidyByDistrictScreen}/>
            <Tab.Screen name="Mpandray" component={AdidyByMpandrayScreen}/>
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
