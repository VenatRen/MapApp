import React, { useContext } from "react";
import { KeyboardAvoidingView } from "react-native";
import { stateContext } from "../../contexts";
import ToastItem from "./ToastItem";
import styles from "./styles";

const OurToast = (props) => {
    const state = useContext(stateContext);
    const toasts = Array.from(state.toasts.values());

    return (
        <KeyboardAvoidingView behavior={"padding"} pointerEvents="box-none" style={styles.mainContainer}>
            {
                toasts.map( (toast, index) => 
                    <ToastItem duration={toast.duration} id={toast.id} text={toast.text} translate={toast.translate} color={toast.color} icon={toast.icon} key={index} />
                )
            }
        </KeyboardAvoidingView>
    );
};

export default OurToast;