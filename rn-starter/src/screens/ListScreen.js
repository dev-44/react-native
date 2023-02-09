import React from "react"
import { Text, StyleSheet, View, FlatList } from 'react-native'

const ListScreen = () => {

    const friends = [
        {name: 'Friend #1', age: 20},
        {name: 'Friend #2', age: 23},
        {name: 'Friend #3', age: 28},
        {name: 'Friend #4', age: 23},
        {name: 'Friend #5', age: 27},
        {name: 'Friend #6', age: 29},
    ]
    return (
        <FlatList
            /*horizontal
            showsHorizontalScrollIndicator={false} */
            keyExtractor={(friend) => friend.name}
            data={friends} 
            renderItem={({item}) => {return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>}}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 5,
        marginHorizontal: 5
    }
})

export default ListScreen