import React, {useEffect, useState} from 'react'
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import * as SQLite from 'expo-sqlite'

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

const AdidyAddScreen = ({navigation}) => {
    const [total, setTotal] = useState(null)
    const [beginAt, setBeginAt] = useState(null)
    const [endAt, setEndAt] = useState(null)

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists adidy (id integer primary key not null, total decimal not null, beginAt Datetime not null, endAt Datetime not null);"
            )
        })
    }, [])

    const add = (total, beginAt, endAt) => {
        // is text empty?
        if (total === null || total === "") {
            return false
        }

        db.transaction(
            (tx) => {
                tx.executeSql("insert into adidy (total, beginAt, endAt) values (?, ?, ?)", [total, beginAt, endAt]);
                tx.executeSql("select * from adidy", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
                )
            },
            null,
            forceUpdate
        )
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
                    <View style={styles.flexRow}>
                        <TextInput
                            onChangeText={(total) => setTotal(total)}
                            placeholder="Vola"
                            style={styles.input}
                            value={total}
                        />
                        <TextInput
                            onChangeText={(beginAt) => setBeginAt(beginAt)}
                            placeholder="Volana farany nanefana adidy"
                            style={styles.input}
                            value={beginAt}
                        />
                        <TextInput
                            onChangeText={(endAt) => setEndAt(endAt)}
                            placeholder="Volana haloa"
                            style={styles.input}
                            value={endAt}
                        />
                        <TouchableOpacity onPress={() => {
                            add(total, beginAt, endAt);
                            setTotal(null);
                            setBeginAt(null);
                            setEndAt(null);
                            navigation.navigate('AdidyList')
                        }}>
                            <Text>Raiketina</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    )
}

export default AdidyAddScreen

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
