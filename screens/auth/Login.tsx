import { View, Text, Button, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SignupDetails } from '../../types/global'
import { SigninUser } from '../../features/AuthFunctions'

const Login = ({ navigation }: any) => {
  const [user, setUser] = useState<SignupDetails>({
    email: '',
    password: '',
  })
  const handleSubmit = () => {
    if (user.email == '' || user.password == '') return
    console.log('Form submitted', user)
    const success = () => {
      console.log('User logged in successfully')
      navigation.navigate('home')
    }
    SigninUser({ user, success })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          value={user.email}
          onChangeText={(text) => setUser({ ...user, email: text })}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={user.password}
          onChangeText={(text) => setUser({ ...user, password: text })}
        />
      </View>
      <Button title="Submit" onPress={handleSubmit} color="red" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    gap: 10,
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 4,
  },
  input: {
    borderWidth: 1,
    fontSize: 20,
    padding: 5,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
})

export default Login
