import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Text, View, StatusBar, Image, Pressable } from 'react-native'
import HomeScreen from './screens/HomeScreen'
import Products from './screens/Products'
import Carts from './screens/Carts'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import ProductHead from './features/ProductHead'
const Tabs = createBottomTabNavigator()
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="login">
        <Stack.Screen
          name="login"
          component={Login}
          options={{
            title: 'Welcome back',
          }}
        />
        <Stack.Screen
          name="register"
          component={Register}
          options={{
            title: 'Welcome to Lasom',
            headerBackVisible: false,
          }}
        />

        <Stack.Screen
          name="home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export const TabNavigator = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        header: ({ navigation, route, options }) => {
          return <ProductHead route={route} />
        },
      }}
    >
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'white' : 'skyblue' }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={32} color="skyblue" />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarActiveBackgroundColor: 'red',
        }}
      />

      <Tabs.Screen
        name="products"
        component={Products}
        options={{
          title: 'Products',
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'white' : 'skyblue' }}>
              Products
            </Text>
          ),

          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="menu" size={32} color="skyblue" />
          ),
          tabBarActiveTintColor: 'blue',
          tabBarActiveBackgroundColor: 'red',
        }}
      />
      <Tabs.Screen
        name="cart"
        component={Carts}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" size={32} color="skyblue" />
          ),
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? 'white' : 'skyblue' }}>Carts</Text>
          ),
          tabBarActiveTintColor: 'blue',
          tabBarActiveBackgroundColor: 'red',
          tabBarBadge: 3,
        }}
      />
    </Tabs.Navigator>
  )
}
