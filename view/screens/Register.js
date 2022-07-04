import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet,Text,View, SafeAreaView, Image,TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomerButton from "../Components/Buttons/CustomerButton";
import CustomerInput from "../Components/CustomerInput.js/CustomerInput";
import COLORS from "../../consts/colors";
import { MaterialIcons } from "@expo/vector-icons";


const Register=({navigation})=>{
    const [newuser, setNewuser] = useState({
        username:"",
        password:"",
        nombre:"",
        apellidoP:"",
        apellidoM:"",
        correo:""
    });

    const handlerChange=(name,value)=>{
        console.log(newuser)
        setNewuser({...newuser,[name]:value})
    }

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
                value={newuser.apellidoP} placeholder={"Apellido Paterno"} style={styles.input}
                onChangeText={(text)=>handlerChange("apellidoP",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.apellidoM} placeholder={"Apellido Materno"} style={styles.input}
                onChangeText={(text)=>handlerChange("apellidoM",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.correo} placeholder={"Correo"} style={styles.input}
                onChangeText={(text)=>handlerChange("correo",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.password} placeholder={"Password"} style={styles.input}
                onChangeText={(text)=>handlerChange("password",text)}secureTextEntry={true}
                />
            </View>
            <CustomerButton text="Register" onPress={onRegister}/>
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