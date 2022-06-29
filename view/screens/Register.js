import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, SafeAreaView, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomerButton from "../Components/Buttons/CustomerButton";
import CustomerInput from "../Components/CustomerInput.js/CustomerInput";
import COLORS from "../../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";


const Register=({navigation})=>{
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [apellido2, setApellido2] = useState("")

    const onRegister=()=>{
        console.warn("Register")
    }

    return(
        <SafeAreaView style={styles.body}>
        <View style={styles.root}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            </View>
            <Text style={{fontSize:28, marginBottom:20, fontWeight:"bold",color:COLORS.dark}}>Register</Text>
            <CustomerInput Placeholder="Username" value={username} setValue={setUsername}/>
            <CustomerInput Placeholder="Nombre" value={nombre} setValue={setNombre}/>
            <CustomerInput Placeholder="ApellidoP" value={apellido} setValue={setApellido}/>
            <CustomerInput Placeholder="ApellidoM" value={apellido2} setValue={setApellido2}/>
            <CustomerInput Placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={{width:width, paddingHorizontal:20}}>
            <CustomerButton text="Register" onPress={onRegister}/>
            </TouchableOpacity>
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
    }
})
export default Register;