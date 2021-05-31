import React, {useState, useLayoutEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from "./styles";
import OurTextField from "../../OurTextField";
import { HeaderBackButton, HeaderTitle} from "../../Header/index";

export default function Register(props) {

  const {navigation} = props;
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const validateForm = (value) => {
    return value.trim() !== "";
  };

  
  useLayoutEffect( () => {
    navigation.setOptions({
      headerLeft: (props) => <HeaderBackButton navigation={navigation}/>,
      headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Register"}/>,
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
            onPress ={()=> navigation.navigate('Login')}
          ><Text>Confirm</Text></TouchableOpacity>
      </View>
    );
  }