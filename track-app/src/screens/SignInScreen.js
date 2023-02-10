import React, { useContext, useEffect} from 'react'
import { View, StyleSheet, Text} from 'react-native'
import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/AuthContext'

const SignInScreen = ({ navigation }) => {

    const {state, signin, clearErrorMessage} = useContext(AuthContext)

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
            <AuthForm headerText='Sign In to your Account' errorMessage={state.errorMessage} onSubmit={signin} submitButtonText='Sign In' />
            <NavLink text='Dont have an account? Sign up instead' routeName='SignUp' />
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

export default SignInScreen