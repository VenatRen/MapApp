import React, {useState} from 'react';

import { StatusBar } from 'expo-status-bar';

import { Button, StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native';
import OurTextField from "./components/OurTextField";




export default function Login(props) {

  const {navigation} = props;
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
                        model={[name, setName]}/>
        </View>
        <View style={styles.input}>
          <OurTextField placeholder="registerPageFormPassword"
                        autoCapitalize="none"
                        autoCompleteType="password"
                        secureTextEntry={true}
                        onValidate={validateForm}
                        model={[password, setPassword]}/>
        </View>
          <TouchableOpacity
            title = "Confirm"
            style={styles.button}
            onPress ={()=> navigation.navigate('MapItem')}
          ><Text>Confirm</Text></TouchableOpacity>
          <TouchableOpacity
            title = "Register"
            style={styles.button}
            onPress ={()=> navigation.navigate('Register')}
          ><Text>Register</Text></TouchableOpacity>
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
      height: 60,
      width:250,
      marginBottom: 15,
      marginTop: 10,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      borderRadius: 4,
      borderColor:'red',
      borderWidth: 1,
      marginBottom: 5,
      marginTop: 5,
      height:30,
      width:100,
    },
    // button_Text: {
    //   textAlign: 'center',
    // },
  });
  

  // "олов" "воло"
  // "фыфф" "фыыф"
  // "фшыл" "фшылл"