import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import yelp from "../api/yelp";

const ResultsShowScreen = ({route}) => {
    const [result, setResult] = useState(null)
    const {id} = route.params

    console.log(result);

    const getSingleResult = async(id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getSingleResult(id)
    }, [])

    if(!result) {
        return null
    }

    return (
        <View>
            <Text style={styles.titleStyle}>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}         //In this case
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}} />
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300,
        marginBottom: 5
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    }
})

export default ResultsShowScreen