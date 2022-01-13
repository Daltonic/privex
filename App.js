import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'

const Stack = createStackNavigator()
const screenOption = {
  headerShown: false,
}

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="ChatScreen" screenOptions={screenOption}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default App
