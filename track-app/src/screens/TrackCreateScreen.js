//import '../_mockLocations'
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { useIsFocused } from '@react-navigation/native';
import Map from '../components/Map'
import TrackForm from '../components/TrackForm';
import { SafeAreaView } from "react-native-safe-area-context"
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'

const TrackCreateScreen = () => {
    const { state: { recording }, addLocation } = useContext(LocationContext)
    const callback = useCallback((location) => addLocation(location, recording), [recording])
    const isFocused = useIsFocused();
    const [ err ] = useLocation(isFocused || recording, callback)                //(location) => addLocation(location)

    return (
        <SafeAreaView forceInset={{ top: 'always'}}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

})

export default TrackCreateScreen