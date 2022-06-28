import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground, Dimensions,Animated, Image, useColorScheme, SafeAreaView, useWindowDimensions } from "react-native";
import COLORS from "../../consts/colors";
import Logo from "./../../assets/logo.png"
import CustomerInput from "../Components/CustomerInput.js/CustomerInput";
import { CustomerButton } from "../Components/Buttons/CustomerButton";
import { TouchableOpacity } from "react-native-gesture-handler";


const Login=({navigation})=>{
    const {height,width}=useWindowDimensions();
    const isDarkMode=useColorScheme()==="dark"
    const backgroundStyle={
        backgroundStyle:isDarkMode?COLORS.dark:COLORS.white
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSingInPressed=()=>{
        console.warn("Sing In")
    }
    const onForgotPressed=()=>{
        console.warn("Forgot Password");
    }

    return(
        <SafeAreaView style={styles.body}>
        <View style={styles.root}>
            <View style={styles.header}></View>
            <Image source={Logo} style={{...styles.logo,height:height*0.3}} resizeMode="contain"/>
            <CustomerInput Placeholder="Username" value={username} setValue={setUsername}/>
            <CustomerInput Placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomerButton text="Sing In" onPress={onSingInPressed}/>
            <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={{width:width, paddingHorizontal:20}}>
            <CustomerButton text="Register" type="SECOND"/>
            </TouchableOpacity>
            <CustomerButton text="Forgot Password" onPress={onForgotPressed} type="TETIARY"/>
        </View>
        </SafeAreaView>
    )
}
const styles= StyleSheet.create({
    header:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
    },body:{
       height:"100%",
       backgroundColor:"#fff"
    },root:{
        alignItems:"center",
        padding:20,
        backgroundColor:"#fff",
    },logo:{
        width:"70%",
        maxWidth:300,
        maxHeight:200
    }
})
export default Login;