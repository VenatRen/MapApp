import React, { useState } from "react";
import { View, TextInput, LayoutAnimation, Platform, UIManager } from "react-native";
import OurText from "../OurText";
import styles from "./styles";

if (Platform.OS === "android")
    if (UIManager.setLayoutAnimationEnabledExperimental)
        UIManager.setLayoutAnimationEnabledExperimental(true);

const VALIDATE_TIME = 1100;

const OurTextField = (props) => {
    const { name, validateTime, model, defValue, placeholder, onValidate, onChange, autoCompleteType, keyboardType, secureTextEntry, autoCapitalize } = props;

    const [text, setText] = model || useState(defValue || "");
    const [isFocused, setFocus] = useState(text || false);
    const [isValid, setValid] = useState(true);
    const [validateTimer, setValidateTimer] = useState(null);

    const onFocus = () => {
        setFocus(true);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    };
    const onBlur = () => {
        if (!text) {
            setFocus(false);
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        }
    };
    const onChangeText = (value) => {
        if (validateTimer) {
            clearTimeout(validateTimer);
            setValidateTimer(null);
        }
        setText(value);
        if (onChange)
            onChange(value, name);

        if (onValidate) {
            const timer = setTimeout(() => {
                setValid(onValidate(value, name) || false);
            }, validateTime || VALIDATE_TIME);
            setValidateTimer(timer);
        }
    };

    return (
        <View style={styles.mainContainer}>
            <OurText style={[styles.placeholder,
            isFocused ? styles.placeholderFocused : styles.placeholderUnfocused,
            isValid ? styles.placeholderValid : styles.placeholderNotValid]} translate={true}>{placeholder}</OurText>
            <TextInput style={[styles.textInput, isValid ? styles.textInputValid : styles.textInputNotValid]}
                onChangeText={onChangeText}
                onFocus={onFocus}
                onBlur={onBlur}
                autoCompleteType={autoCompleteType}
                autoCapitalize={autoCapitalize}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                value={text} />
        </View>
    )
};

export default React.memo(OurTextField);