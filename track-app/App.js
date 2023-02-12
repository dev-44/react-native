import React, { useContext } from 'react'
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AccountScreen from './src/screens/AccountScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import TrackCreateScreen from './src/screens/TrackCreateScreen'
import TrackDetailsScreen from './src/screens/TrackDetailsScreen'
import TrackListScreen from './src/screens/TrackListScreen'
import InitialScreen from './src/screens/InitialScreen';
import { Provider as AuthProvider, Context as AuthContext } from './src/context/AuthContext'
import { Provider as LocationProvider } from './src/context/LocationContext'
import { Provider as TrackProvider } from './src/context/TrackContext';
import { FontAwesome } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();

function TrackListNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='TrackList'
                component={TrackListScreen}
                options={{title: 'Tracks'}}
            />
            <Stack.Screen 
                name='TrackDetails'
                component={TrackDetailsScreen}
            />
        </Stack.Navigator>
    );
};

const RootNavigation = () => {

    const { state } = useContext(AuthContext)

    return (
        <NavigationContainer>

            {state.token !== null ? 
                <Tab.Navigator initialRouteName='TrackListNavigator'>
                    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} options={{title: 'Add Track', tabBarIcon: ({color, size}) => (<Icon name="add" color={color} size={size} />), }} />
                    <Tab.Screen name="Account" component={AccountScreen} options={{ tabBarIcon: ({color, size}) => (<Icon name="account-circle" color={color} size={size} />), }} />
                    <Tab.Screen name="TrackListNavigator" component={TrackListNavigator} options={{title: 'Tracks', tabBarIcon: ({color, size}) => (<Icon name="list" color={color} size={size} />), }} />
                </Tab.Navigator>

                :
                
                <Stack.Navigator>
                    <Stack.Screen name="Initial" component={InitialScreen} options={() => ({
                        headerShown: false
                    })}/>
                    <Stack.Screen name="SignUp" component={SignUpScreen} options={() => ({
                        headerShown: false
                    })}/>
                    <Stack.Screen name="SignIn" component={SignInScreen} options={() => ({
                        headerShown: false
                    })} />
                </Stack.Navigator> 
            }

        </NavigationContainer> 
    );
};


export default function App () {
    return (
        <TrackProvider>
            <LocationProvider>
                <AuthProvider>
                    <RootNavigation />
                </AuthProvider>
            </LocationProvider>
        </TrackProvider>
    )
}