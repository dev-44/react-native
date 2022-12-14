import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({title, results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <Text style={{ marginLeft: 15 }}>Results: {results.length}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return <ResultsDetail result={item} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {marginBottom: 10},
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
})

export default ResultsList