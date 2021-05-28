import React, { useLayoutEffect } from 'react';
import { View, TouchableOpacity, ScrollView } from 'react-native';
import { HeaderBackButton, HeaderTitle } from "../Header";
import OurText from "../OurText";
import OurImage from "../OurImage";
import styles from "./styles";



const ProfilePage = (props) => {

    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: (props) => <HeaderBackButton navigation={navigation} />,
            headerCenter: (props) => <HeaderTitle navigation={navigation} title={"Profile"} />,
            headerStyle: {
                backgroundColor: "lightblue",
            },
        });
    }, [navigation]);

    return (
        <ScrollView style={styles.mainContainer}>
            <View style={styles.topContainer}>
                <View style={styles.pictureContainer}>
                    <OurImage
                        style={styles.picture_profile}
                        disabled={true}
                    />
                </View>
                <View style={styles.infoProfile}>
                    <View style={styles.nameInfo}>
                        <OurText>Hello awdddddw</OurText>
                    </View>
                </View>
            </View>
        </ScrollView>
    );

}





export default ProfilePage;
