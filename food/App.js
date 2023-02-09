import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SearchScreen from './src/screens/SearchScreen'
import ResultsShowScreen from './src/screens/ResultsShowScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Search'>
        <Stack.Screen name='Search' component={SearchScreen} options={{title: 'Business Search'}}/>
        <Stack.Screen name='Results' component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}