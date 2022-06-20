import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ImageBackground, StyleSheet} from "react-native"
const Onboarding=()=>{
    return(
        <View style={{flex:1}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            style={{flex:1}}
            source={require("./../../assets/onboardingback.jpeg")}></ImageBackground>
            <View style={style.description}>
                
            </View>
        </View>
    )
}

const style= StyleSheet.create({
    description:{
    heigth:"50%",
    bottom:0,
    position:"abosolute",
    paddingHorizontal:40
    }
})

export default Onboarding;