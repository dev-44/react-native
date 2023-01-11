import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetails = ({title, image}) => {
    return (
        <View>
            <Image source={image}/>
            <Text>Image of {title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default ImageDetails