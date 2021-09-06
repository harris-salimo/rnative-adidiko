import React, {useEffect, useState} from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as SQLite from 'expo-sqlite'
import { FontAwesome } from '@expo/vector-icons'

const openDataBase = () => {
    if (Platform.OS === "web") {
        return {
            transaction: () => {
                return {
                    executeSql: () => {},
                }
            },
        }
    }
    
    const db = SQLite.openDatabase("adidiko.db")
    return db
}

const db = openDataBase()

const AdidyListScreen = ({navigation}) => {
    const [adidyList, setAdidyList] = useState(null);
  
    useEffect(() => {
      db.transaction((tx) => {
        tx.executeSql(
          `select * from adidy;`,
          [],
          (_, { rows: { _array } }) => setAdidyList(_array)
        )
      })
    }, [])
  
    if (adidyList === null || adidyList.length === 0) {
      return null;
    }
  
    return (
        <View style={styles.container}>
            {Platform.OS === "web" ? (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text style={styles.heading}>
                        Expo SQlite is not supported on web!
                    </Text>
                </View>
            ) : (
                <>
                    <ScrollView style={styles.listArea}>
                        <View style={styles.sectionContainer}>
                            {adidyList.map((adidy) => (
                                <TouchableOpacity
                                    key={adidy.id}
                                    onPress={() => onPressItem && onPressItem(adidy.id)}
                                    style={{
                                    backgroundColor: "#fff",
                                    borderColor: "#000",
                                    borderWidth: 1,
                                    padding: 8,
                                    }}
                                >
                                    <Text style={{ color: "#000" }}>{adidy.total}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('AdidyAdd')}>
                            <FontAwesome name="plus" size={25}/>
                        </TouchableOpacity>
                    </ScrollView>
                </>
            )}
        </View>
    )
}

export default AdidyListScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
        //paddingTop: Constants.statusBarHeight,
    },
    heading: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
    flexRow: {
        flexDirection: "row",
    },
    input: {
        borderColor: "#4630eb",
        borderRadius: 4,
        borderWidth: 1,
        flex: 1,
        height: 48,
        margin: 16,
        padding: 8,
    },
    listArea: {
        backgroundColor: "#f0f0f0",
        flex: 1,
        paddingTop: 16,
    },
    sectionContainer: {
        marginBottom: 16,
        marginHorizontal: 16,
    },
    sectionHeading: {
        fontSize: 18,
        marginBottom: 8,
    },
})
