import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const instance = axios.create({
    baseURL: 'https://19c8-2803-2a00-2c15-e0d8-9188-7131-6487-733f.sa.ngrok.io' ,
})

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token')

        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)

export default instance