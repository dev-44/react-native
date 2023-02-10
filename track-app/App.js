import React, { useContext } from 'react'
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

const Stack = createNativeStackNavigator()
const Tab = createMaterialBottomTabNavigator();

function TrackListNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name='TrackList'
                component={TrackListScreen}
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
                    <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
                    <Tab.Screen name="Account" component={AccountScreen} />
                    <Tab.Screen name="TrackListNavigator" component={TrackListNavigator} />
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
        <LocationProvider>
            <AuthProvider>
                <RootNavigation />
            </AuthProvider>
        </LocationProvider>
    )
}