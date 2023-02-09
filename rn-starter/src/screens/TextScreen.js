import React, {useState} from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'

const TextScreen = () => {
    const [text, setText] = useState("")

    return <View>
        <p><Text style={styles.label}>Enter Password</Text></p>
        <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} value={text} onChangeText={(newValue) => setText(newValue)} />
        {text.length < 5 ? <Text style={styles.errorMessage}>Password must be longer than 5 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }, label: {
        fontSize: 16
    },
    errorMessage: {
        color: 'red'
    }
})

export default TextScreen