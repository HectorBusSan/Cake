import { View, Text,StyleSheet,SafeAreaView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"
import Productos from './Productos';
const MyCart = ({navigation}) => {
    const [product, setProduct] = useState()
    const [total, setTotal] = useState(null)
    useEffect(() => {
      const unsubscribe= navigation.addListener("focus",()=>{
        getDataFromDB();
      })
    }, [navigation])
    
    const getDataFromDB=async()=>{
        // let items=await AsyncStorage.getItem("cartItem")
        // items = JSON.parse(items);
        // let productData=[];
        // if(items){
        //     Productos.forEach(data=>{
        //         if(items.includes(data.id)){
        //             productData.push(data)
        //             return
        //         }
        //     })
        //     setProduct(productData)
        //     getTotal(productData)
        // }
        // else{
        //     setProduct(false)
        //     getTotal(false)
        // }
        const resp=await AsyncStorage.getItem("cartItem");
        setProduct(resp)
    }
const getTotal=(productData)=>{
    let total=0;
    for(let index=0; index<productData.length;index++){
        let productPrice= productData[index].productPrice
        total=total+productPrice;
    }
    setTotal(total);

}
  return (
    <SafeAreaView>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            <View style={{display:"flex", flexDirection:"row", width:"20%", justifyContent:"space-between"}}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
                <FontAwesome name="shopping-cart" size={24} />
            </View>
        </View>
        <View>
            {/* {
                product?
                product.map((data,index)=>{
                    return(
                        <Text>{data}</Text>
                    )
                })
                :<Text>NO hay</Text>
            } */}
            {
                product?
                <Text>{product}</Text>:
                <Text>NO hay</Text>
            }
        </View>
    </SafeAreaView>
  )
}

export default MyCart

const style = StyleSheet.create({
    header:{paddingHorizontal:20,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between"
    },
});