import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements' 
import Spacer from '../components/Spacer'
import { Context as AuthContext } from '../context/AuthContext'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SignUpScreen = ({ navigation }) => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext)

    useEffect(() => {

        const clear = navigation.addListener('blur', () => {
            clearErrorMessage()
        })

        return () => {
            clear
        }
    }, [])

    return (
        <View style={styles.container}>

            <AuthForm headerText='Sign Up for Tracker' errorMessage={state.errorMessage} onSubmit={signup} submitButtonText='Sign Up' />
            <NavLink text='Already have an account? Sign in instead' routeName='SignIn' />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        //marginBottom: 200
    },
})

export default SignUpScreen