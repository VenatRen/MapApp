import React, { useState, useLayoutEffect } from 'react';
import { Text, View, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styles from "./styles";
import OurTextField from "../../OurTextField";
import { HeaderTitle } from "../../Header/index";

export default function Login(props) {
  const [name, setName] = useState('');
  const { navigation } = props;
  const [password, setPassword] = useState('');
  const validateForm = (value) => {
    return value.trim() !== "";
  };

  const [gradStart, gradMiddle, gradEnd] = ["#B0E8E4", "#86A8E7", "#7F7FD5"];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerCenter: (props) => <HeaderTitle navigation={navigation} title={"login"} />,
      headerStyle: {
        backgroundColor: gradStart,
      },
    });
  }, [navigation]);

  return (
    <>
      <LinearGradient
        style={styles.background}
        locations={[0, .8, 1]}
        colors={[gradStart, gradMiddle, gradEnd]} />
      <View style={styles.mainContainer}>
        <KeyboardAvoidingView style={styles.topContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <OurTextField placeholder="registerPageFormUsername"
              onValidate={validateForm}
              autoCompleteType="username"
              model={[name, setName]} />
            <OurTextField placeholder="registerPageFormPassword"
              autoCapitalize="none"
              autoCompleteType="password"
              secureTextEntry={true}
              onValidate={validateForm}
              model={[password, setPassword]} />
          </ScrollView>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              title="Confirm"
              style={styles.button}
              onPress={() => navigation.navigate('Orders')}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
}