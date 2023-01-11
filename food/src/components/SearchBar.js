import React, {} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'     //Library of Icons'

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' style={styles.iconStyle}/>
            <TextInput 
                placeholder='Search' 
                style={styles.inputStyle} 
                value={term} 
                onChangeText={(newText) => onTermChange(newText)}
                autoCapitalize='none'
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        heigth: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },  
    inputStyle: {
        flex: 1,
        //fontSize: 14      Default
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
    }
})

export default SearchBar