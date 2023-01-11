import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_CHANGE = 20

const reducer = (state, action) => {
    //state === {red: number, green: number, blue: number}
    //action === {type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15}

    switch(action.type) {
        case 'change_red':
            if (state.red + action.payload > 255 || state.red + action.payload < 0) {
                 return state
            }
            return {...state, red: state.red +  action.payload}
        case 'change_green':
            if (state.green + action.payload > 255 || state.green + action.payload < 0) {
                return state
            }
            return {...state, green: state.green +  action.payload}
        case 'change_blue':
            if (state.blue + action.payload > 255 || state.blue + action.payload < 0) {
                return state
            }
            return {...state, blue: state.blue +  action.payload}
        default:
            return state
    }
}

const DynamicColors = () => {

    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0})
    const {red, green, blue} = state

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => {dispatch({type: 'change_red', payload: COLOR_CHANGE})}} onDecrease={() => dispatch({type: 'change_red', payload: -1 * COLOR_CHANGE})} />
            <ColorCounter color="Green" onIncrease={() => {dispatch({type: 'change_green', payload: COLOR_CHANGE})}} onDecrease={() => {dispatch({type: 'change_green', payload: -1 * COLOR_CHANGE})}} />
            <ColorCounter color="Blue" onIncrease={() => {dispatch({type: 'change_blue', payload: COLOR_CHANGE})}} onDecrease={() => {dispatch({type: 'change_blue', payload: -1 * COLOR_CHANGE})}} />

            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default DynamicColors