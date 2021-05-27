import React, { useState, useLayoutEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import OurTextField from "../OurTextField";
import { HeaderTitle } from "../../components/Header/index";

export default function Login(props) {
  const [name, setName] = useState('');
  const { navigation } = props;
  const [password, setPassword] = useState('');
  const validateForm = (value) => {
    return value.trim() !== "";
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerCenter: (props) => <HeaderTitle navigation={navigation} title={"login"} />,
      headerStyle: {
        backgroundColor: "lightblue",
      },
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
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