import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"

import icon_logo from "../../assets/icon_main_logo.png"

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    useEffect(() => {
        setTimeout(() => {
            startLogin()
        }, 3000)
    }, [])

    const startLogin = () => {
        navigation.replace("Login")
    }

    return <View style={styles.root}>
        <Image style={styles.logo_main} source={icon_logo}></Image>
    </View>

}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center"
    },
    logo_main: {
        width: 210,
        height: 110,
        marginTop: 200,
        resizeMode: "contain"   //保证全部展示
    },
})