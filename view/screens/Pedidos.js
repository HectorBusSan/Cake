import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { MaterialIcons,FontAwesome} from '@expo/vector-icons'
import OrderList from '../Components/List/OrderList'
import COLORS from '../../consts/colors'
import { TextInput } from 'react-native-gesture-handler'

const Pedidos = ({navigation,route}) => {
    const Usuario=route.params;
    const [search, setSearch] = useState("")
    const searching=(e)=>{
        setSearch(e)
        // console.log(e)
    }

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
                    Usuario.pedido==3&&Usuario.rol==1?
                    <Text>Podras consultar todas las ventas realizadas</Text>:
                    Usuario.pedido==3&&Usuario.rol==2?
                    <Text>Podras consultar el historial de todas tus compras</Text>:
                    <Text>Podras consultar tus pedidos en esta Pantalla:</Text>}
                </View>
            </View>
            <View style={{flexDirection:"row",backgroundColor:"#ccc",
                borderRadius:10,alignItems:"center",justifyContent:"space-between",marginBottom:1,marginHorizontal:20,paddingHorizontal:0}}>
                <TextInput value={search} onChangeText={(text)=>searching(text)} placeholder='Codigo de Pedido' style={{ fontSize:18,
                fontWeight:"bold",color:COLORS.dark,marginLeft:5,marginRight:10}}/>
                <TouchableOpacity onPress={()=>setSearch("")}><FontAwesome name="search" size={24} color="black" style={{backgroundColor:COLORS.green,padding:10,borderRadius:7}}/></TouchableOpacity>
            </View>
            <View style={{padding:20,backgroundColor:COLORS.green,marginTop:10,borderRadius:20,height:"68%"}}>
                <OrderList User={Usuario} Search={search} navigation={navigation}/>
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