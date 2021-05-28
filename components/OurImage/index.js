import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";

import OurText from "../OurText";
import styles from "./styles";

const OurImage = (props) => {
    const {url, title, onPress, style, disabled} = props;
  

    return (
        <TouchableOpacity style={styles.container} activeOpacity={onPress && !disabled ? 0 : 1} onPress={(e) => {
            if (!disabled)
                onPress(e);
        }}>
            <Image style={style || styles.image} source={{uri: url}}/>
            {
                title ?
                    <OurText style={styles.title}>{title}</OurText> :
                    <></>
            }
        </TouchableOpacity>
    );
};

export default OurImage;