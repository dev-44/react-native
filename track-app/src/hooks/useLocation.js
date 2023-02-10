import { useState, useEffect } from 'react'
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from 'expo-location'

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState()

    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();

            if (!granted) {
                throw new Error('Location permission not granted');
            }

            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, callback)

            setSubscriber(sub)
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if(shouldTrack) {
            startWatching()
        } else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])

    return [err]                    //Returning an array for convention of hooks.
}