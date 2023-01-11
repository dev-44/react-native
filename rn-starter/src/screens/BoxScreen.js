import React, {} from "react";
import { Text, View, StyleSheet} from 'react-native'

const BoxScreen = () => {
    return <View style={styles.viewStyle}>
        <View style={styles.viewStyle1} />
        <View style={styles.viewStyle2} />
        <View style={styles.viewStyle3} />
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewStyle1: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'red',
        height: 50,
        width: 50

    },
    viewStyle2: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'green',
        height: 50,
        width: 50,
        //marginTop: 50,
        //alignSelf: 'flex-end'
        top: 50,

    },
    viewStyle3: {
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'blue',
        height: 50,
        width: 50
    },
    textStyle: {
        borderWidth: 3,
        borderColor: 'red'
    }
})

export default BoxScreen