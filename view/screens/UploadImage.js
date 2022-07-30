import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Platform,Alert,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import CustomerButton from '../Components/Buttons/CustomerButton';
import * as ImagenPicker from "expo-image-picker"
import api,{addImageToListing, saveProduct, uploadI} from '../../api';

const UploadImage = ({navigation}) => {
    const [newproduct, setNewproduct] = useState({
        nombre:"",
        informacion:"",
        imagen:"",
        precio:"",
    });
    const handlerChange=(name,value)=>{
        setNewproduct({...newproduct,[name]:value});
    }
    const [all, setAll] = useState();
    const [selectedImage, setSelectedImage] = useState(null);
    let openImagePickerAsync=async()=>{
        let permissionResult= await ImagenPicker.requestMediaLibraryPermissionsAsync()
        if(permissionResult.granted===false){
            alert("Permision to access camera is required");
            return;
        }
        const pickerResult= await ImagenPicker.launchImageLibraryAsync();
        // setAll(pickerResult)
        if(permissionResult.cancelled===true){
            return;
        }
        // setSelectedImage(pickerResult)
        if(Platform.OS === 'web'){
            const remoteUri= await uploadToAnonymousFilesAsync(pickerResult.uri)
            // console.log(remoteUri)
            setSelectedImage({localUri:pickerResult.uri,remoteUri:remoteUri})
          }else{
            console.log(pickerResult);
            setSelectedImage({localUri:pickerResult.uri})
            setNewproduct({...newproduct,["imagen"]:pickerResult.uri})
            let name=JSON.stringify(pickerResult.uri);
            let pickername= name.lastIndexOf("/")+1;
            // let pickername= JSON.stringify(pickerResult.uri);
            setAll({uri:pickerResult.uri,
                type:pickerResult.type,
                name:pickerResult.uri.substr(pickername)
                })
          } 
    }

    const onRegister=()=>{
        console.log(newproduct);
        uploadI(newproduct)
        console.log(all);
        
    }

  return (   
    <SafeAreaView style={styles.body}>
        <View style={styles.root}>
            <View style={styles.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            </View>
            <Text style={{fontSize:28, marginBottom:20, fontWeight:"bold",color:COLORS.dark}}>Register</Text>
            <View style={styles.container}>
                <TextInput
                value={newproduct.nombre} placeholder={"Nombre del Producto"} style={styles.input}
                onChangeText={(text)=>handlerChange("nombre",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newproduct.informacion} placeholder={"Descripción"} style={styles.input}
                onChangeText={(text)=>handlerChange("informacion",text)} 
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newproduct.precio} placeholder={"Precio"} style={styles.input}
                onChangeText={(text)=>handlerChange("precio",text)}
                />
            </View>
            <View style={{alignItems:"center"}}>
            <Text style={{alignItems:"center", margin:20}}>Selecciona una Imagen</Text>
            <TouchableOpacity onPress={openImagePickerAsync}>
                <Image source={{uri: selectedImage!== null ? selectedImage.localUri : 'https://picsum.photos/200/200'}} style={style.image}/>
            </TouchableOpacity>
            </View>
            <View style={{width:"100%", marginTop:10}}>
            <TouchableOpacity style={{width:"100%",fontWeight:"bold",padding:15,marginVertical:5,alignItems:"center",borderRadius:30,backgroundColor:"#3B71F3",color:"#fff"}} onPress={onRegister}>
                
                <Text style={{color:"#fff",fontWeight:"bold"}}>Registro</Text>
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
const style = StyleSheet.create({
    contenedor: { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: '#292929' },
    title: { fontSize: 30, color: '#fff' },
    image: {height:200, width:200, borderRadius:100, resizeMode:'contain'},
    button:{backgroundColor:"#35a", borderRadius:50, padding:10, marginTop:10},
    buttonText:{color:"#fff", fontSize:20}
  });

export default UploadImage