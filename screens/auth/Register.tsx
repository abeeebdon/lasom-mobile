import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from 'react-native'
import React, { useState } from 'react'
import { SignupDetails } from '../../types/global'
import { createUser } from '../../features/AuthFunctions'

const Register = ({ navigation }: any) => {
  const [newUser, setNewUser] = useState<SignupDetails>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
  })
  const handleSubmit = () => {
    console.log('Form submitted', newUser)
    if (newUser.confirmPassword !== newUser.password) return
    createUser(newUser)
  }
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 10,
          width: '100%',
        }}
      >
        <View style={(styles.inputContainer, { flexBasis: '49%' })}>
          <Text>First name</Text>
          <TextInput
            placeholder="Enter your first name"
            value={newUser.firstName}
            onChangeText={(text) => setNewUser({ ...newUser, firstName: text })}
            style={styles.input}
          />
        </View>
        <View style={(styles.inputContainer, { flexBasis: '49%' })}>
          <Text>Last name</Text>
          <TextInput
            placeholder="Enter your last name"
            value={newUser.lastName}
            onChangeText={(text) => setNewUser({ ...newUser, lastName: text })}
            style={styles.input}
          />
        </View>
      </View>
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
          secureTextEntry
          onChangeText={(text) => setNewUser({ ...newUser, password: text })}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Confirm Password</Text>
        <TextInput
          placeholder="Confirm your password"
          style={styles.input}
          value={newUser.confirmPassword}
          secureTextEntry
          onChangeText={(text) =>
            setNewUser({ ...newUser, confirmPassword: text })
          }
        />
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
        <Text>Already have an account?</Text>
        <Pressable onPress={() => navigation.navigate('login')}>
          <Text>Login</Text>
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
    width: '100%',
    paddingHorizontal: 10,
    paddingTop: 10,
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
