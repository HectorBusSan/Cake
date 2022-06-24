import React,{useRef, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground, Dimensions,Animated, Image, useColorScheme, SafeAreaView, useWindowDimensions } from "react-native";
import COLORS from "../../consts/colors";
import Logo from "./../../assets/logo.png"
import CustomerInput from "../Components/CustomerInput.js/CustomerInput";
const Login=()=>{
    const {height}=useWindowDimensions();
    const isDarkMode=useColorScheme()==="dark"
    const backgroundStyle={
        backgroundStyle:isDarkMode?COLORS.dark:COLORS.white
    }
    return(
        <View style={styles.root}>
            <View style={styles.header}></View>
            <Image source={Logo} style={{...styles.logo,height:height*0.3}} resizeMode="contain"/>
            <CustomerInput/>
        </View>
    )
}
const styles= StyleSheet.create({
    header:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
    },root:{
        alignItems:"center",
        padding:20,
    },logo:{
        width:"70%",
        maxWidth:300,
        maxHeight:200
    }
})
export default Login;