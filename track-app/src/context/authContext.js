import React from 'react'
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload}

        case 'signup':
            return {errorMessage: '', token: action.payload}

        case 'signin':
            return {errorMessage: '', token: action.payload}

        case 'clear_error_message':
            return {...state, errorMessage: ''}

        case 'signout':
            return {token: null, errorMessage: ''}
    
        default:
            return state;
    }
}

const tryLocalSignIn = dispatch => async() => {
    const token = await AsyncStorage.getItem('token')

    if (token) {
        dispatch({ type: 'signin', payload: token})
        return token
    }
}

const clearErrorMessage = (dispatch) => () => {
    dispatch({ type: 'clear_error_message'})
}

const signup = (dispatch) => async ({ email, password}) => {

    try {
        const response = await trackerApi.post('/signup', {email, password})
        await AsyncStorage.setItem('token', response.data.token)
        dispatch({type: 'signup', payload: response.data.token})

    } catch (error) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with Sign Up'})
    }
}

const signin = (dispatch) => {
    return async ({ email, password}) => {
        try {
            const response = await trackerApi.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({type: 'signin', payload: response.data.token})
            
        } catch (error) {
            dispatch({ type: 'add_error', payload: 'Something went wrong with Sign In'})
        }
    }
}

const signout = (dispatch) => async() => {
    await AsyncStorage.removeItem('token')
    dispatch({ type: 'signout'})
}

export const { Provider, Context } = createDataContext(
    authReducer,
    {signup, signin, signout, clearErrorMessage, tryLocalSignIn, signout},
    {token: null, errorMessage: ''}
)