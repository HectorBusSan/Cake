import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, SafeAreaView, Image,TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomerButton from "../Components/Buttons/CustomerButton";
import COLORS from "../../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { getUser, saveUser } from "../../api";


const Register=({navigation})=>{
    const [newuser, setNewuser] = useState({
        username:"",
        Password:"",
        nombre:"",
        ApellidoP:"",
        ApellidoM:"",
        Correo:"",
        rol:2
    });

    const handlerChange=(name,value)=>{
        setNewuser({...newuser,[name]:value});
    }

    const onRegister=async()=>{
        let arrayP=Object.values(newuser.Password)
        let arrayC=Object.values(newuser.Correo)
        // console.log(arrayP);
        // console.log(arrayC)
        let includesP= arrayP.includes("/");
        let includesP2= arrayP.includes("*");
        let correoIncl= arrayC.includes(".");

        if(newuser.username.length < 8){
            console.warn("El usuario debe ser mayor 8 carateres");
        }else if(newuser.Password.length < 8 ){
            console.warn("El password debe ser mayor 8 carateres");
        }else if(newuser.nombre<2){
            console.warn("Llenar campo de nombre");
        }else if(newuser.ApellidoP<2){
            console.warn("Llenar campo de Apellido");
        }else if(newuser.Correo<2){
            console.warn("Llenar campo de correo");
        }else if(includesP||includesP2){
            console.warn("contraseña invalida no permitido signos")
        }else{
            await saveUser(newuser)
            console.log(newuser);
        }
    }

    return(
        <SafeAreaView style={styles.body}>
        <View style={styles.root}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            </View>
            <Text style={{fontSize:28, marginBottom:20, fontWeight:"bold",color:COLORS.dark}}>Register</Text>
            <View style={styles.container}>
                <TextInput
                value={newuser.username} placeholder={"Username"} style={styles.input}
                onChangeText={(text)=>handlerChange("username",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.nombre} placeholder={"Nombre"} style={styles.input}
                onChangeText={(text)=>handlerChange("nombre",text)} 
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.ApellidoP} placeholder={"Apellido Paterno"} style={styles.input}
                onChangeText={(text)=>handlerChange("ApellidoP",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.ApellidoM} placeholder={"Apellido Materno"} style={styles.input}
                onChangeText={(text)=>handlerChange("ApellidoM",text)} 
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.Correo} placeholder={"Correo"} style={styles.input}
                onChangeText={(text)=>handlerChange("Correo",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.Password} placeholder={"Password"} style={styles.input}
                onChangeText={(text)=>handlerChange("Password",text)}secureTextEntry={true}
                />
            </View>
            <View style={{width:"100%", marginTop:10}}>
            <TouchableOpacity style={{width:"100%"}} onPress={onRegister}>
                <CustomerButton text="Register"/>
            </TouchableOpacity>
            </View>
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
export default Register;