import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity, Dimensions} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { FontAwesome } from '@expo/vector-icons'

const validationSchema = Yup.object().shape({
    email: Yup.string()
      .label('Email')
      .email('Diso ny mailaka nampidirinao')
      .required('Ilaina ny mailaka'),
    password: Yup.string()
      .label('Password')
      .required('Ilaina ny teny miafina')
});

const ErrorMessage = ({ errorValue }) => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{errorValue}</Text>
    </View>
);

const LoginScreen = ({navigation}) => {
    function onLoginHandler(values) {
        const { email, password } = values;
    
        alert(`Credentials entered. email: ${email}, password: ${password}`);
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                onLoginHandler(values, actions);
                }}
                validationSchema={validationSchema}
            >
                {({
                handleChange,
                values,
                errors,
                touched,
                handleSubmit,
                handleBlur
                }) => (
                    <>
                        <Text style={{fontSize: 25, color: 'orange'}}>Fanamarihana</Text>
                        <ErrorMessage errorValue={touched.email && errors.email} />
                        <TextInput 
                            style={styles.input} 
                            numberOfLines={1} 
                            value={values.email} 
                            placeholder="Mailaka" 
                            onChangeText={handleChange('email')} 
                            autoCapitalize="none" 
                            autoCompleteType="email" 
                            keyboardType="email-address" 
                            onBlur={handleBlur('email')} />
                        <ErrorMessage errorValue={touched.password && errors.password} />
                        <TextInput 
                            style={styles.input} 
                            numberOfLines={1} 
                            value={values.password} 
                            placeholder="Teny miafina" 
                            onChangeText={handleChange('password')} 
                            autoCapitalize="none" 
                            onBlur={handleBlur('password')} 
                            secureTextEntry={true} />
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
                                <Text style={styles.buttonText}>Hiditra</Text>
                                <FontAwesome style={{marginLeft: 5}} name="sign-in" size={25} color={'#fff'}/>
                            </TouchableOpacity>
                            <Text>Hadino ny teny miafina?</Text>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    errorContainer: {
        marginVertical: 5
    },
    errorText: {
        color: 'red'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        fontSize: 18,
        marginBottom: 5,
        width: Dimensions.get('window').width - 70,
        height: 50,
        borderWidth: 1,
        borderColor: '#d8d8d8',
        padding: 10,
        borderRadius: 50
    },
    buttonContainer: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        width: Dimensions.get('window').width - 225,
        height: 50,
        borderRadius: 50,
        backgroundColor: 'orange',
        flexDirection: 'row',
        marginRight: 5
    },
    buttonText: {
        fontSize: 18,
        color: '#ffffff'
    }
})
