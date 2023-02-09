import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from "../components/ColorCounter";

const COLOR_CHANGE = 10

const DynamicColors = () => {

    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const changeColor = (color, change) => {
        switch(color) {
            case 'red':
                (red + change > 255 || red + change < 0) ? null : setRed(red + change)
                return
            case 'green':
                (green + change > 255 || green + change < 0) ? null : setGreen(green + change)
                return
            case 'blue':
                (blue + change > 255 || blue + change < 0) ? null : setBlue(blue + change)
                return
            default:
                return
        }
    }

    return (
        <View>
            <ColorCounter color="Red" onIncrease={() => changeColor('red', COLOR_CHANGE)} onDecrease={() => changeColor( 'red', -1 * COLOR_CHANGE)} />
            <ColorCounter color="Green" onIncrease={() => changeColor('green', COLOR_CHANGE)} onDecrease={() => changeColor( 'green', -1 * COLOR_CHANGE)} />
            <ColorCounter color="Blue" onIncrease={() => changeColor('blue', COLOR_CHANGE)} onDecrease={() => changeColor( 'blue', -1 * COLOR_CHANGE)} />

            <View style={{height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}></View>
        </View>
    )
}

const styles = StyleSheet.create({})

export default DynamicColors