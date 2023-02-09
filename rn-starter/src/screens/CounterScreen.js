import React, {useState} from "react";
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
    //todo: fix this
    const [counter, setCounter] = useState(0)

    return <View>
        <Text>Current Count: {counter}</Text>
        <Button title="Increase" onPress={() => {setCounter(counter + 1)}}/>
        <Button title="Decrease" onPress={() => {setCounter(counter - 1)}}/>
    </View>
}

const styles = StyleSheet.create({})

export default CounterScreen