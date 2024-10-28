import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Login" onPress={() => navigation.navigate('login')} />
    </View>
  )
}

export default HomeScreen
