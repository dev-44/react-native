import '../_mockLocations'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map'
import { SafeAreaView } from "react-native-safe-area-context"
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext)
    const isFocused = useIsFocused();
    const [ err ] = useLocation(isFocused, addLocation)                //(location) => addLocation(location)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen