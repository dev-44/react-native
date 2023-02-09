import { TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from './src/context/BlogContext'

import { Feather } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'

const Stack = createNativeStackNavigator()

export default function App () {
  return(
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen name='Index' component={IndexScreen} options={ ({navigation}) => (
              { title: 'Blogs', 
                headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Create') }>
                      <Feather name="plus" size={30} />
                  </TouchableOpacity>
                )
              }
            )
          } />
          <Stack.Screen name='Show' component={ShowScreen} options={ ({navigation, route}) => (
              { title: 'View Blog',headerRight: () => (
                  <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: route.params.id})}>
                    <Feather name='edit' size={30} />
                  </TouchableOpacity>
                )
              }
            )
          } />
          <Stack.Screen name='Create' component={CreateScreen} options={{ title: 'Create New Blog'}}/>
          <Stack.Screen name='Edit' component={EditScreen} options={{ title: 'Edit Blog'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}