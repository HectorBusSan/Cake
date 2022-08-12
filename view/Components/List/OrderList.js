import { View, Text ,FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import OrderItem from './OrderItem'
import { orders } from '../../../api'

const OrderList = () => {
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
    const renderItem=({item})=>{
        return <OrderItem pedidos={item}/>
    }

  return (
      <FlatList
        style={{width:"100%"}}
        data={pedidos}
        keyExtractor={(item)=>{item.id+" "}}
        renderItem={renderItem}/>
  )
}

export default OrderList