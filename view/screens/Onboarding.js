import { StatusBar } from "expo-status-bar";
import React from "react";
import {View,Text, ImageBackground, StyleSheet} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

const Onboarding=({navigation})=>{
    return(
        <View style={{flex:1}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            <ImageBackground
            style={{flex:1}}
            source={require("./../../assets/onboardingback.jpeg")}>
                <View style={style.description}>
                    <Text style={{color:COLORS.white,fontSize:32,fontWeight:"bold"}}>Cake Shop</Text>
                    <Text style={{color:COLORS.white,fontSize:31,fontWeight:"bold"}}>Fine Bakery</Text>
                    <Text style={{color:COLORS.white,lineHeight:25,marginTop:15}}>The Best Cake shop of the whole world, enjoy us desserts and cakes</Text>
                    <TouchableOpacity activeOpacity={0.8}
                    onPress={()=>navigation.navigate("Home")}>
                    <View style={style.btn}>
                        <Text style={{fontWeight:"bold"}}>Login</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

const style= StyleSheet.create({
    description:{
    height:"50%",
    bottom:0,
    position:"absolute",
    paddingHorizontal:40,
    },
    btn:{
        height:50,
        width:120,
        backgroundColor:COLORS.white,
        marginTop:20,
        borderRadius:7,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default Onboarding;