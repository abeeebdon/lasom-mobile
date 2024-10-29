import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { SignInDetails } from '../../types/global'
import { SigninUser } from '../../features/AuthFunctions'

const Login = ({ navigation }: any) => {
  const [user, setUser] = useState<SignInDetails>({
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
    success()
    // SigninUser({ user, success })
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
      <View>
        <Text style={styles.forgotText}>Forgot password ?</Text>
      </View>

      <Button title="Submit" onPress={handleSubmit} color="red" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 5,
          justifyContent: 'center',
        }}
      >
        <Text>A new user</Text>

        <Pressable onPress={() => navigation.navigate('register')}>
          <Text style={{ color: 'blue' }}>Create new account</Text>
        </Pressable>
      </View>
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
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 20,
    padding: 6,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  forgotText: { textAlign: 'right', color: 'blue' },
})

export default Login
