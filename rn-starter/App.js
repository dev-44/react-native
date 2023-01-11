import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import DynamicColors from './src/screens/DynamicColors';
import DynamicColorsWithReducer from './src/screens/DynamicColorsWithReducer';
import TextScreen from './src/screens/TextScreen';
import BoxScreen from './src/screens/BoxScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Components' component={ComponentsScreen} />
          <Stack.Screen name='List' component={ListScreen} />
          <Stack.Screen name='Image' component={ImageScreen} />
          <Stack.Screen name='Counter' component={CounterScreen} />
          <Stack.Screen name='Color' component={ColorScreen} />
          <Stack.Screen name='DynamicColors' component={DynamicColorsWithReducer} />
          <Stack.Screen name='Text' component={TextScreen} />
          <Stack.Screen name='Box' component={BoxScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
