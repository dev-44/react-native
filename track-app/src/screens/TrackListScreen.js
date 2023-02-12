import React, { useContext, useCallback, useEffect } from 'react'
import { View, StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { ListItem } from 'react-native-elements';
import { useFocusEffect } from '@react-navigation/native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = ({ navigation }) => {

    const { state, fetchTracks } = useContext(TrackContext)

/*     useFocusEffect(
        useCallback(() => {
            fetchTracks()
            console.log(tracks)
        }, [tracks])
    ) */

    useEffect(()=> {
        fetchTracks()
    }, [])

    useEffect(()=> {
        fetchTracks()
    }, [state])


    return (
        <View>
            <FlatList
            data={state}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => navigation.navigate('TrackDetails', { _id: item._id })} >
                  <ListItem>
                    <ListItem.Content>
                      <ListItem.Title>{item.name}</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                  </ListItem>
                </TouchableOpacity>
              );
            }}
          />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default TrackListScreen