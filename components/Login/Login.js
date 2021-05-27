import React, { useState, useEffect, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import styles from "./styles";
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import OurTextField from "../OurTextField";
import { HeaderBackButton, HeaderTitle, HeaderProfieButton} from "../../components/Header/index";

export default function Login(props) {
  const [name, setName] = useState('');
  const { navigation } = props;
  const [password, setPassword] = useState('');
  const validateForm = (value) => {
    return value.trim() !== "";
  };

  useLayoutEffect( () => {
    navigation.setOptions({
        headerLeft: (props) => <HeaderBackButton navigation={navigation}/>,
        headerCenter: (props) => <HeaderTitle navigation={navigation} title={"login"}/>
    });
}, [navigation]);

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
      <View style={styles.buttonContainer}>
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
    </View>
  );
}