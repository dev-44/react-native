import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from './Spacer'
import { Context as LocationContext } from '../context/LocationContext'
import useSaveTracks from '../hooks/useSaveTracks'

const TrackForm = () => {

    const { state: {name, recording, locations}, 
            startRecording, 
            stopRecording, 
            changeName 
        } = useContext(LocationContext)

    const [saveTrack] = useSaveTracks()

    return (
        <>
            <Spacer>
                <Input value={name} onChangeText={changeName} placeholder='Enter name' />
            </Spacer>
            <Spacer>
                {recording  
                    ? <Button title="Stop Recording" onPress={stopRecording} buttonStyle={{ backgroundColor: 'rgba(255, 0, 0, 1)' }}/> 
                    : <Button title="Start Recording" onPress={startRecording} disabled={!name} />
                }
            </Spacer>
            <Spacer>
                {!recording && locations.length 
                    ? <Button title='Save Recording' buttonStyle={{ backgroundColor: 'rgba(0, 255, 0, 1)'}} onPress={saveTrack} />
                    : null
                }
            </Spacer>
        </>
    )
}

export default TrackForm