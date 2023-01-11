import React from "react"
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {

    const name = 'Oscar'

    return (
        <View>
            <Text style={styles.container}>This is Components Demo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20
    },
})

export default ComponentsScreen