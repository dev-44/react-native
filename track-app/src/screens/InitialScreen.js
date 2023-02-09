import React, { useEffect, useContext } from 'react'
import { Context as AuthContext } from '../context/authContext'
import { useNavigation } from '@react-navigation/native'

const InitialScreen = () => {
    const { state, tryLocalSignIn } = useContext(AuthContext)
    const navigation = useNavigation()

    useEffect(() => {
        console.log('Use Effect inicial')

        const call = async() => {
            let token = await tryLocalSignIn()
            console.log(token)
            if(token === (null || undefined)) {
                navigation.navigate('SignIn')
                console.log('Here');
            }
        }

        call()
    }, [])

    

    return null
}

export default InitialScreen