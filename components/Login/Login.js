import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import OurTextField from "../OurTextField";

export default function Login(props) {

  const { navigation } = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = (value) => {
    return value.trim() !== "";
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <StatusBar style="auto" />
      <View style={styles.input}>
        <OurTextField placeholder="registerPageFormUsername"
          onValidate={validateForm}
          autoCompleteType="username"
          model={[name, setName]} />
      </View>
      <View style={styles.input}>
        <OurTextField placeholder="registerPageFormPassword"
          autoCapitalize="none"
          autoCompleteType="password"
          secureTextEntry={true}
          onValidate={validateForm}
          model={[password, setPassword]} />
      </View>
      <TouchableOpacity
        title="Confirm"
        style={styles.button}
        onPress={() => navigation.navigate('Orders')}
      ><Text>Confirm</Text></TouchableOpacity>
      <TouchableOpacity
        title="Register"
        style={styles.button}
        onPress={() => navigation.navigate('Register')}
      ><Text>Register</Text></TouchableOpacity>
    </View>
  );
}