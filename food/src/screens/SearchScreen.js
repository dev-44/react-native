import React, {useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('')
    const [searchApi, results, errMsg] = useResults()

    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newText) => setTerm(newText)} 
                onTermSubmit={() => searchApi(term)}
            />
            <Text style={styles.errorMessageStyle}>{errMsg}</Text>
            <Text style={{ marginLeft: 15 }}>We have found {results.length} results </Text>
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='Cost Effective'/>
                <ResultsList results={filterResultsByPrice('$$')} title='Bit Pricier'/>
                <ResultsList results={filterResultsByPrice('$$$')} title='Big Spender'/>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    errorMessageStyle: {
        color: 'red'
    }
})

export default SearchScreen