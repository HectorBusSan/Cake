import { View, Text,SafeAreaView,StyleSheet,Image, ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import { MaterialIcons,FontAwesome } from '@expo/vector-icons';
import COLORS from '../../consts/colors';
import products from '../../consts/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { sellOrder } from '../../api';

const Ventas = ({navigation,route}) => {
    const pedidos=route.params;
    const [result, setResult] = useState([])
    
    useEffect(() => {
      getData()
    }, [])
    
    
    const getData=()=>{
    let datas=[]
        products.forEach(data=>{
            if(data.id==pedidos.idproducto){
                datas.push(data);
                
            }
        })
    setResult(datas);
    }
    const sell=async(id)=>{
        console.log(id)
        await sellOrder({codcake:id})
        // let ident=parseInt(id)
        // await sellOrder(id)
        ToastAndroid.show(`Confirmando Venta ${id}`,
        ToastAndroid.SHORT)
    }
  return (
    <SafeAreaView style={{backgroundColor:COLORS.light}}>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
        </View>
        <View style={{paddingHorizontal:20,marginTop:10}}>
            <Text style={{fontSize:24,marginLeft:10}}>Ventas</Text>
            <Text style={{fontSize:22,marginLeft:10}}>Bienvenido Administrador</Text>
        </View>
        <View style={{backgroundColor:"#ccc",borderRadius:10,padding:10,marginHorizontal:10,alignItems:"center",marginVertical:10}}>
            <Text>Aqui podra realizar las ventas:</Text>
        </View>
        <View style={{padding:10,margin:10,borderRadius:10,backgroundColor:COLORS.green,marginTop:10}}>
            <View style={{backgroundColor:"#fff",padding:10,borderRadius:10,flexDirection:"row"}}>
                <View style={{flex:1, alignItems:"center"}}>
                    <View style={{alignItems:"center"}}>
                        <Text style={{fontSize:18}}>Pedido de </Text>
                        <Text style={{color:COLORS.green,fontWeight:"bold",fontSize:18}}>{pedidos.username}</Text>
                    </View>
                    {result.map(data=><Image style={{width:120,height:120}} source={data.img}/>)}
                </View>
                <View style={{flex:1,marginTop:15,justifyContent:"center"}}>
                    <Text>Codigo del Pedido: </Text>
                    <Text style={{color:COLORS.green,marginRight:20}}>{pedidos.codcake}</Text>
                    <Text>Producto: {pedidos.idproducto}</Text>
                    <Text>Cantidad: {pedidos.cantidad}</Text>
                    <Text>Total: ${pedidos.total}</Text>
                </View>
                <View style={{position:"absolute",bottom:10,right:20}}>
                        <TouchableOpacity onPress={()=>sell(pedidos.codcake)} style={{padding:2,borderRadius:26,backgroundColor:"#000"}}><FontAwesome name="check" size={24} color="#fff" style={{backgroundColor:COLORS.green,borderRadius:14,padding:2}} /></TouchableOpacity>
                    </View>
            </View>
        </View>
        <View>

        </View>
    </SafeAreaView>
  )
}
const style= StyleSheet.create({
    header:{
        paddingHorizontal:20,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default Ventas