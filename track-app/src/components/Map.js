import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView , { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {

    const { state: { currentLocation, locations } } = useContext(LocationContext)
    
    if(!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }

    /*let points = []

    for (let i=0; i<20; i++) {
        points.push({
            latitude: -25.323779 + i * 0.001,
            longitude: -57.564720 + i * 0.001
        })
    } */


    return (
        <MapView 
            style={styles.map} 
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} 
/*             region={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} */
        >
            <Circle center={currentLocation.coords} radius={20} strokeColor="rgba(158, 158, 255, 1.0)" fillColor='rgba(158, 158, 255, 0.3)' />
            <Polyline coordinates={locations.map((loc) => loc.coords)} />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map