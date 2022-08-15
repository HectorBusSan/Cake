import { View, Text ,FlatList, RefreshControl} from 'react-native'
import React,{useState,useEffect} from 'react'
import OrderItem from './OrderItem'
import { orders } from '../../../api'
import { useIsFocused } from '@react-navigation/native'
import products from '../../../consts/products'

const OrderList = ({User,search}) => {
    const [pedidos, setPedidos] = useState([])
    const [refresting, setRefresting] = useState(false);

    const isFocused=useIsFocused();

    const loadOrders=async()=>{
        const data= await orders();
        setPedidos(data);
    }
    useEffect(() => {
        console.log(isFocused)
        loadOrders();
    }, [isFocused])

    const renderItem=({item})=>{
        return <OrderItem User={User} pedidos={item} loadOrders={loadOrders}/>
    }

    const onRefresh= React.useCallback(async()=>{
      setRefresting(true);
      await loadOrders();
      setRefresting(false);
  })
  return (
      <FlatList
        style={{width:"100%", height:"100%"}}
        data={pedidos}
        keyExtractor={(item)=>{item.id+""}}
        renderItem={renderItem}
        refreshControl={
            <RefreshControl
            refreshing={refresting}
            colors={["#78e08f"]}
            onRefresh={onRefresh}
            progressBackgroundColor="#0a3d62"/>
        }
        />
  )
}

export default OrderList