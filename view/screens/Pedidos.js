import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { MaterialIcons} from '@expo/vector-icons'
import { orders } from '../../api'
import OrderList from '../Components/List/OrderList'

const Pedidos = ({navigation,route}) => {
    const Usuario=route.params;
    const [pedidos, setPedidos] = useState([])

    const loadOrders=async()=>{
        const data= await orders();
        setPedidos(data);
    }
    useEffect(() => {
    return () => {
        loadOrders();
      }
    }, [])
    



    // useEffect(() => {
    //   return () => {
    //     (async()=>{
    //         const task= await orders();
    //         console.log([task])
    //         // setPedidos({
    //         //     id:task.id,
    //         //     codigop:task.codigop,
    //         //     codcake: task.codcake,
    //         //     idproducto:task.idproducto,
    //         //     cantidad:task.cantidad,
    //         //     total:task.total,
    //         //     fechai:task.fechai,
    //         //     fechaf:task.fechaf,
    //         //     usuario:task.usuario,
    //         //     completo:task.completo
    //         // });
    //         setPedidos(task)
    //     })();
    //   }
    // }, [navigation])
    
  return (
    <SafeAreaView>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
        </View>
        <View style={{marginVertical:10,paddingHorizontal:20}}>
            <Text style={{fontSize:24}}>Pedidos: {Usuario.username}</Text>
            <View style={{width:"100%",backgroundColor:"#ccc",height:"100%",borderRadius:20,marginTop:20,padding:10}}>
                <Text>Podras consultar tus pedidos en esta Pantalla:</Text>
                <OrderList/>
            </View>
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