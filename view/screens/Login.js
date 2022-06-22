import React,{useRef, useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground, Dimensions,Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";


const {height,width}=Dimensions.get("window");

const Login=({navigation})=>{

const fadeAnim= useRef(new Animated.Value(1)).current;

    const fadeIn=()=>{
        Animated.timing(fadeAnim,{
            toValue:1,
            duration:5000
        }).start({finished: false})
    }

    const fadeOut=()=>{
        Animated.timing(fadeAnim,{
            toValue:0,
            duration:3000,
        }).start()
    }


    return(
        <View style={{flex:1, backgroundColor:COLORS.white}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
                <ImageBackground source={require("./../../assets/LoginBack.jpeg")}
                style={{flex:1,height:null,width:null,justifyContent:"flex-end"}}>
                
                <View style={{height:height/3}}>
                    <TouchableOpacity onPress={fadeOut}>
                        <Animated.View style={{...styles.button,opacity:fadeAnim}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>Sing In</Text>
                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={fadeIn}>
                        <View style={{...styles.button,marginTop:20, backgroundColor:"#2E71DC"}}>
                            <Text style={{fontSize:20,fontWeight:"bold", color:COLORS.white}}>Register</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
        </View>
    )
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },button:{
        backgroundColor:COLORS.white,
        height:70,
        marginHorizontal:20,
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
    },buttonR:{
        backgroundColor:"#2E71DC",
        height:70,
        marginHorizontal:20,
        borderRadius:35,
        alignItems:"center",
        justifyContent:"center",
        marginVertical:10
    }
})

export default Login;