import { View, Text } from 'react-native'
import React from 'react'
import OrderItem from './OrderItem'
import { FlatList } from 'react-native-gesture-handler'

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
        return <OrderItem task={item}/>
    }

  return (
    <View>
      <FlatList
        style={{width:"100%"}}  
        data={pedidos}
        renderItem={renderItem}
        keyExtractor={(item)=>{item.id+""}}
        />

    </View>
  )
}

export default OrderList