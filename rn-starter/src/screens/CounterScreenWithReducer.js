import React, {useReducer} from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
    //state === {count: number}
    //action === {type: 'increment' || 'decrement', payload: 1}

    switch (action.type) {
        case 'increment':
            return {...state, count: state.count + action.payload}
            break;

        case 'decrement':
            return {...state, count: state.count - action.payload}
            break
    
        default:
            return state;
    }

}

const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return <View>
        <Text>Current Count: {state.count}</Text>
        <Button title="Increase" onPress={() => dispatch({type: 'increment', payload: 1})}/>
        <Button title="Decrease" onPress={() => dispatch({type: 'decrement', payload: 1})}/>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen