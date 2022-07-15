import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

const Products = () => {
    const [newuser, setNewuser] = useState({
        nombre:"",
        informacion:"",
        imagen:"",
        precio:"",
    });
    // https://codesandbox.io/s/cc5m3?file=/pages/api/upload.js
    const handlerChange=(name,value)=>{
        setNewuser({...newuser,[name]:value});
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
                value={newuser.nombre} placeholder={"Nombre del Producto"} style={styles.input}
                onChangeText={(text)=>handlerChange("nombre",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.informacion} placeholder={"Descripción"} style={styles.input}
                onChangeText={(text)=>handlerChange("informacion",text)} 
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.precio} placeholder={"Precio"} style={styles.input}
                onChangeText={(text)=>handlerChange("precio",text)}
                />
            </View>
            <View style={styles.container}>
                <TextInput
                value={newuser.imagen} placeholder={"Insertar Imagen"} style={styles.input}
                onChangeText={(text)=>handlerChange("imagen",text)} 
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

export default Products