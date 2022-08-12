import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity} from 'react-native'
import React,{useEffect,useState} from 'react'
import { MaterialIcons} from '@expo/vector-icons'
import OrderList from '../Components/List/OrderList'
import COLORS from '../../consts/colors'

const Pedidos = ({navigation,route}) => {
    const Usuario=route.params;
    
    
  return (
    <SafeAreaView>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
        </View>
            <View style={{marginVertical:10,paddingHorizontal:20}}>
                <Text style={{fontSize:24}}>Pedidos: {Usuario.username}</Text>
                <View style={{width:"100%",backgroundColor:"#ccc",borderRadius:20,marginTop:20,padding:10}}>
                    <Text>Podras consultar tus pedidos en esta Pantalla:</Text>
                </View>
            </View>
            <View style={{padding:20,backgroundColor:COLORS.green,borderRadius:20,height:"70%"}}>
                <OrderList/>
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