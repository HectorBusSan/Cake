import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'
import products from '../../../consts/products'

const OrderItem = ({pedidos}) => {
  const [productos, setProductos] = useState([])
  useEffect(() => {
      getData();
  }, [])
  let datas=[]
  const getData=()=>{
    products.forEach(data=>{
      if(pedidos.id== Number(data.id)){
        datas.push(data);
      }
    })
    setProductos(datas);
  }
  useEffect(() => {
    console.log(productos)
  }, [productos])
  
return (
  <View style={{marginBottom:20}}>
    <Text>Pedido:</Text>
      <Text>id: {pedidos.id}</Text>
      <Text>cod del pedido:{pedidos.codigop}</Text>
      <Text>cod cake: {pedidos.codcake}</Text>
      <Text>cod del producto: {pedidos.idproducto}</Text>
      <Text>cantidad: {pedidos.cantidad}</Text>
      <Text>total: {pedidos.total}</Text>
      <Text>fecha de solicitud: {pedidos.fechai}</Text>
      <Text>fehca de entrega: {pedidos.fechaf}</Text>
      <Text>usuario: {pedidos.username}</Text>
      <Text>completo: {Number(pedidos.completo)}</Text>
      <Text>---------------</Text>
    </View>
  )
}

export default OrderItem