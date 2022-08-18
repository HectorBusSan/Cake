import React,{useState} from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, ImageBackground, Dimensions,Animated, Image, useColorScheme, SafeAreaView, useWindowDimensions,TextInput } from "react-native";
import COLORS from "../../consts/colors";
import Logo from "./../../assets/logo.png"
import CustomerInput from "../Components/CustomerInput.js/CustomerInput";
import { CustomerButton } from "../Components/Buttons/CustomerButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { getUser } from "../../api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login=({navigation})=>{
    const {height,width}=useWindowDimensions();
    const isDarkMode=useColorScheme()==="dark"
    const backgroundStyle={
        backgroundStyle:isDarkMode?COLORS.dark:COLORS.white
    }
    
    const [log, setLog] = useState({
        username:"",
        Password:""
    })
    // const [goHome, setGoHome] = useState();

    const [user, setUser] = useState({
        username:"",
        Password:"",
        nombre:"",
        ApellidoP:"",
        ApellidoM:"",
        Correo:"",
        rol:""
    })
    const handlerChanger= (name,value)=>{
        setLog({...log,[name]:value});
    }

    const onSingInPressed=async()=>{
        // console.log(username,Password);
        await getUser(log);
        const respuesta=await getUser(log);
        setUser(respuesta)
        if(respuesta===null){
            console.warn("Usuario o Contraseña Incorrecta")
            setLog({
                username:"",
                Password:""
            })
        }else{
            console.log("vamos!!!")
            // console.log(user);
            navigation.navigate("Home",{
                id:respuesta.id,
                username:respuesta.username,
                Password:respuesta.Password,
                nombre:respuesta.nombre,
                ApellidoP:respuesta.ApellidoP,
                ApellidoM:respuesta.ApellidoM,
                Correo:respuesta.Correo,
                rol:respuesta.rol
            })
            let array=[]
            await AsyncStorage.setItem("cartItem",JSON.stringify(array))
            await AsyncStorage.setItem("cantidad",JSON.stringify(array))
        }
    }
    const onForgotPressed=()=>{
        console.warn("Forgot Password");
    }

    return(
        <SafeAreaView style={styles.body}>
        <View style={styles.root}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            </View>
            <Text style={{fontSize:28, marginBottom:20, fontWeight:"bold",color:COLORS.dark}}>Login</Text>
            <Image source={Logo} style={{...styles.logo,height:height*0.3,marginBottom:30}} resizeMode="contain"/>
            <View style={styles.container}>
                <TextInput
                value={log.username} placeholder={"Username"} style={styles.input}
                onChangeText={(text)=>handlerChanger("username",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={log.Password} placeholder={"Password"} style={styles.input}
                onChangeText={(text)=>handlerChanger("Password",text)} secureTextEntry={true}
                />
            </View>
            <View style={{width:"100%", marginTop:10}}>
            <TouchableOpacity style={{width:"100%"}} onPress={onSingInPressed}>
            <CustomerButton text="Sing In"/>
            </TouchableOpacity>
            </View>
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
        width:"100%"
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
    },container:{
        backgroundColor:"#fff",
        width:"100%",
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginHorizontal:10,
        marginVertical:5
    }
})
export default Login;