import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../../consts/colors";
import { Animated } from "react-native";
import { TapGestureHandler } from "react-native-gesture-handler";

const {height,width}=Dimensions.get("window");

const Login=({navigation})=>{

    const [opacity, setOpacity] = useState(1);
    const changer=()=>{
        setOpacity(0)
        console.log("opacidad")
    }

    function runTiming(clock, value, dest){
        const state={
            finished: new Value(0),
            position: new Value(0),
            time: new Value(0),
            fameTime:new Value(0)
        }
    }

    return(
        <View style={{flex:1, backgroundColor:COLORS.white}}>
            <StatusBar translucent backgroundColor="rgba(0,0,0,0)"/>
                <ImageBackground source={require("./../../assets/LoginBack.jpeg")}
                style={{flex:1,height:null,width:null,justifyContent:"flex-end"}}>
                
                <View style={{height:height/3}}>
                    <TouchableOpacity onPress={changer}>
                        <Animated.View style={{...styles.button,opacity:opacity}}>
                                <Text style={{fontSize:20,fontWeight:"bold"}}>Sing In</Text>
                        </Animated.View>
                    </TouchableOpacity>
                    <View style={{...styles.button,marginTop:20, backgroundColor:"#2E71DC"}}>
                        <Text style={{fontSize:20,fontWeight:"bold", color:COLORS.white}}>Register</Text>
                    </View>
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