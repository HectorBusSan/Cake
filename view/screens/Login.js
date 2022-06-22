import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";

const Login=({navigation})=>{
    return(
        <View style={{flex:1, backgroundColor:COLORS.white}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
            
                <ImageBackground source={require("./../../assets/LoginBack.jpeg")}
                style={{flex:1,height:null,width:null}}>

                </ImageBackground>
            
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default Login;