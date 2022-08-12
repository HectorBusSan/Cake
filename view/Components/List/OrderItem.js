import { View, Text } from 'react-native'
import React from 'react'

const OrderItem = ({pedidos}) => {
  return (
    <View style={{backgroundColor:"#f00"}}>
    <Text>Servicio:</Text>
      <Text>{pedidos.id}</Text>
      <Text>{pedidos.codigop}</Text>
      <Text>{pedidos.codcake}</Text>
      <Text>{pedidos.idproducto}</Text>
      <Text>{pedidos.cantidad}</Text>
      <Text>{pedidos.total}</Text>
      <Text>{pedidos.fechai}</Text>
      <Text>{pedidos.fechaf}</Text>
      <Text>{pedidos.username}</Text>
      <Text>{pedidos.completo}</Text>
    </View>
  )
}

export default OrderItem