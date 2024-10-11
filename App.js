import 'react-native-gesture-handler';
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

const Stack = createStackNavigator()

import { Provider } from './src/context/BlogContext';

import IndexScreen from './src/screen/IndexScreen';
import ShowScreen from './src/screen/ShowScreen';
import CreateScreen from './src/screen/CreateScreen';
import EditScreen from './src/screen/EditScreen';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Index" component={IndexScreen} options={{ title: "Blogs", headerTitleAlign: "center" }} />
          <Stack.Screen name="Show" component={ShowScreen} options={{ title: "Blogs", headerTitleAlign: "center" }} />
          <Stack.Screen name="Create" component={CreateScreen} options={{ title: "Blogs", headerTitleAlign: "center" }} />
          <Stack.Screen name="Edit" component={EditScreen} options={{ title: "Blogs", headerTitleAlign: "center" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App
