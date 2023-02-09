import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Getting started with React Native!</Text>
            <Button title="Go To Components Demo" onPress={() => navigation.navigate('Components')}/>
            <Button title="Go To List Demo" onPress={() => navigation.navigate('List')}/>
            <Button title="Go To Image Screen" onPress={() => navigation.navigate('Image')}/>
            <Button title="Go To Counter Screen" onPress={() => navigation.navigate('Counter')}/>
            <Button title="Go To Color Screen" onPress={() => navigation.navigate('Color')}/>
            <Button title="Go To Dynamic Colors Screen" onPress={() => navigation.navigate('DynamicColors')}/>
            <Button title="Go To Text Screen" onPress={() => navigation.navigate('Text')}/>
            <Button title="Go To Box Screen" onPress={() => navigation.navigate('Box')}/>
            
            {/*<TouchableOpacity onPress={() => navigation.navigate('List')}>
                <Text>Go To List Demo</Text>
            </TouchableOpacity> */}
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20
    }
});

export default HomeScreen;