import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, View, TextInput, } from 'react-native';




export default function Register(props) {

  const {navigation} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  
    return (
      <View style={styles.container}>
        <Text>Register</Text>
        <StatusBar style="auto" />
        <View style={styles.input}><TextInput value={name} onChangeText={ (name)=>{setName(name)} } placeholderTextColor="red" placeholder="User name"/></View>
        <View style={styles.input}><TextInput value={password} onChangeText={ (password)=>{setPassword(password)} } placeholderTextColor="red" placeholder="Password"/></View>
        <View style={styles.input}><TextInput value={password} onChangeText={ (password)=>{setPassword(password)} } placeholderTextColor="red" placeholder="Confirm password"/></View>
        <Button
          title = "Confirm"
          style={styles.button}
          onPress ={()=> navigation.navigate('Main')}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      backgroundColor: 'lightblue',
      color: "red",
      borderRadius: 4,
      height: 30,
      width:250,
      marginBottom: 15,
      marginTop: 10,
    },
    button: {
      marginBottom: 15,
      marginTop: 10,
    }
  });
  

  // "олов" "воло"
  // "фыфф" "фыыф"
  // "фшыл" "фшылл"