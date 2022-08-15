import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { MaterialIcons,FontAwesome} from '@expo/vector-icons'
import OrderList from '../Components/List/OrderList'
import COLORS from '../../consts/colors'
import { TextInput } from 'react-native-gesture-handler'

const Pedidos = ({navigation,route}) => {
    const Usuario=route.params;
    
    
  return (
    <SafeAreaView>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
        </View>
            <View style={{marginVertical:10,paddingHorizontal:20}}>
                <Text style={{fontSize:24}}>Pedidos: {Usuario.username}</Text>
                <View style={{width:"100%",backgroundColor:"#ccc",borderRadius:20,marginTop:10,padding:10}}>
                    {Usuario.pedido==1?
                    <Text>Podras consultar tus pedidos listos para que los recibas en esta Pantalla:</Text>:
                    Usuario.pedido==2?
                    <Text>Podras consultar todos los pedidos en esta Pantalla:</Text>:
                    <Text>Podras consultar tus pedidos en esta Pantalla:</Text>}
                </View>
            </View>
            <View style={{flexDirection:"row",backgroundColor:"#ccc",
                borderRadius:10,alignItems:"center",justifyContent:"space-between",marginBottom:1,marginHorizontal:20,paddingHorizontal:0}}>
                <TextInput placeholder='Ingresar Codigo de Pedido' style={{ fontSize:18,
                fontWeight:"bold",color:COLORS.dark,marginLeft:5,marginRight:10}}/>
                <FontAwesome name="search" size={24} color="black" style={{backgroundColor:COLORS.green,padding:10,borderRadius:7}}/>
            </View>
            <View style={{padding:20,backgroundColor:COLORS.green,marginTop:10,borderRadius:20,height:"70%"}}>
                <OrderList User={Usuario}/>
            </View>
    </SafeAreaView>
  )
}
const style= StyleSheet.create({
    header:{paddingHorizontal:20,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
    }
})

export default Pedidos