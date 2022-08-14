import { View, Text,Image,StyleSheet } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../../../consts/products'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../../consts/colors'


const OrderItem = ({User,pedidos}) => {
  const [productos, setProductos] = useState()
  useEffect(() => {
      getData();
  }, [])
  let datas=[]
  const getData=()=>{
    products.forEach(data=>{
      if(pedidos.idproducto== Number(data.id)){
        datas.push(data);
      }
    })
    setProductos(datas);
  }
  useEffect(() => {
    console.log(productos)
  }, [productos])

  // Todos los datos que tenemos:
  // {/* <Text>Pedido:</Text>
  //         <Text>id: {pedidos.id}</Text>
  //         <Text>cod del pedido:{pedidos.codigop}</Text>
  //         <Text>Codigo de Pedido:</Text>
  //         <Text>{pedidos.codcake}</Text>
  //         <Text>cod del producto: {pedidos.idproducto}</Text>
  //         <Text>cantidad: {pedidos.cantidad}</Text>
  //         <Text>total: ${pedidos.total}</Text>
  //         <Text>fecha de solicitud: {pedidos.fechai}</Text>
  //         <Text>fehca de entrega: {pedidos.fechaf}</Text>
  //         <Text>usuario: {pedidos.username}</Text>
  //         <Text>completo: {Number(pedidos.completo)}</Text>
  //         <Text>---------------</Text> */}
  
return (
  <View key={pedidos.id}>
    {
      (pedidos.username==User.username && pedidos.completo==0&&User.pedido!=1)||(pedidos.username==User.username && pedidos.completo==1&&User.pedido==1)?
      
  <TouchableOpacity style={style.button}>
      <View style={{flexDirection:"row",marginBottom:10}}>
        <View style={{flex:1}}>
        <Text style={{fontWeight:"bold",fontSize:18}}>Pedido:</Text>
          {
            productos?productos.map(data=><Image style={{width:110,height:110}} source={data.img} />):null
          }
        </View>
        <View style={{flex:2,marginLeft:10,alignSelf:"flex-end"}}>
          <Text>Codigo de Pedido:</Text>
          <Text style={{color:COLORS.green, fontWeight:"bold"}}>{pedidos.codcake}</Text>
          <Text>Cantidad: {pedidos.cantidad}</Text>
          <Text>Total: ${pedidos.total}</Text>
          <Text> Id: {pedidos.idproducto}</Text>
        </View>
      </View>
      <View style={{alignItems:'center'}}>
      <Text>fecha de solicitud: {pedidos.fechai}</Text>
      <Text>fehca de entrega: {pedidos.fechaf}</Text>
      <Text>User: {pedidos.username}</Text>
      </View>
  </TouchableOpacity>
      :null
    }
  </View>
  )
}
const style=StyleSheet.create({
  button:{
    marginBottom:20,backgroundColor:COLORS.light,paddingHorizontal:10,paddingVertical:15,borderRadius:10
  },
  nobuton:{
    display:"none"
  }
})
export default OrderItem