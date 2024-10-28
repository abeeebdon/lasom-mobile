import { View, Text, TextInput, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import { SignupDetails } from '../../types/global'
import { createUser } from '../../features/AuthFunctions'

const Register = () => {
  const [newUser, setNewUser] = useState<SignupDetails>({
    email: '',
    password: '',
  })
  const handleSubmit = () => {
    console.log('Form submitted', newUser)
    createUser(newUser)
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>Email Address</Text>
        <TextInput
          placeholder="Enter your email address"
          value={newUser.email}
          onChangeText={(text) => setNewUser({ ...newUser, email: text })}
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          value={newUser.password}
          onChangeText={(text) => setNewUser({ ...newUser, password: text })}
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

export default Register
