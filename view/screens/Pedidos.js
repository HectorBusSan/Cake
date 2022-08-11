import { View, Text, SafeAreaView, StyleSheet,TouchableOpacity } from 'react-native'
import React,{useEffect,useState} from 'react'
import { MaterialIcons,FontAwesome } from '@expo/vector-icons'
import { orders } from '../../api'
const Pedidos = ({navigation,route}) => {
    const Usuario=route.params;
    const [pedidos, setPedidos] = useState()
    useEffect(() => {
      return () => {
        (async()=>{
            const task= await orders(Usuario.username);
            // console.log(task)
            setPedidos([task]);
            
        })();
        console.log(pedidos);
      }
    }, [])
    
  return (
    <SafeAreaView>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
        </View>
        <View style={{marginVertical:10,paddingHorizontal:20}}>
            <Text style={{fontSize:24}}>Pedidos: {Usuario.username}</Text>
            <View style={{width:"100%",backgroundColor:"#ccc",height:"100%",borderRadius:20,marginTop:20,padding:10}}>
                <Text>Podras consultar tus pedidos en esta Pantalla:</Text>
            </View>
            <View>
                <Text>{pedidos>1?pedidos:null}</Text>
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