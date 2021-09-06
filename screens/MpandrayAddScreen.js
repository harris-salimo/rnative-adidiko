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

const db = openDataBase();

const MpandrayAddScreen = ({navigation}) => {
    // return (
    //     <View style={styles.container}>
    //         <Text>Mpandray add!</Text>
    //         <TouchableOpacity onPress={() => navigation.navigate('MpandrayList')}>
    //             <Text>Raiketina</Text>
    //         </TouchableOpacity>
    //     </View>
    // )
    const [name, setName] = useState(null)
    const [address, setAddress] = useState(null)
    const [dateOfBirth, setDateOfBirth] = useState(null)
    const [phone, setPhone] = useState(null)
    const [email, setEmail] = useState(null)
    const [facebook, setFacebook] = useState(null)

    useEffect(() => {
        db.transaction((tx) => {
            tx.executeSql(
                "create table if not exists mpandray (id integer primary key not null, name text not null, address text not null, dateOfBirth datetime not null, phone text not null, email text not null, facebook text not null);"
            )
        })
    }, [])

    const add = (name, address, dateOfBirth, phone, email, facebook) => {
        // is text empty?
        if (name === null || name === "") {
            return false;
        }

        db.transaction(
            (tx) => {
                tx.executeSql("insert into mpandray (name, address, dateOfBirth, phone, email, facebook) values (?, ?, ?, ?, ?, ?)", [name, address, dateOfBirth, phone, email, facebook]);
                tx.executeSql("select * from items", [], (_, { rows }) =>
                console.log(JSON.stringify(rows))
                );
            },
            null,
            forceUpdate
        );
    };

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
                            onChangeText={(name) => setName(name)}
                            placeholder="Anarana sy Fanampiny"
                            style={styles.input}
                            value={name}
                        />
                        <TextInput
                            onChangeText={(address) => setAddress(address)}
                            placeholder="Adiresy"
                            style={styles.input}
                            value={address}
                        />
                        <TextInput
                            onChangeText={(dateOfBirth) => setDateOfBirth(dateOfBirth)}
                            placeholder="Daty nahaterahana"
                            style={styles.input}
                            value={dateOfBirth}
                        />
                        <TextInput
                            onChangeText={(phone) => setPhone(phone)}
                            placeholder="Laharana finday"
                            style={styles.input}
                            value={phone}
                        />
                        <TextInput
                            onChangeText={(email) => setEmail(email)}
                            placeholder="Mailaka"
                            style={styles.input}
                            value={email}
                        />
                        <TextInput
                            onChangeText={(facebook) => setFacebook(facebook)}
                            placeholder="Facebook"
                            style={styles.input}
                            value={facebook}
                        />
                        <TouchableOpacity onPress={() => {
                            add(name, address, dateOfBirth, phone, email, facebook)
                            setName(null)
                            setAddress(null)
                            setDateOfBirth(null)
                            setPhone(null)
                            setEmail(null)
                            setFacebook(null)
                            navigation.navigate('MpandrayList')
                        }}>
                            <Text>Raiketina</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </View>
    )
}

export default MpandrayAddScreen

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
