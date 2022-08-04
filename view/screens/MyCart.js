import { View, Text,StyleSheet,SafeAreaView, ScrollView,Image } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"
import products from '../../consts/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import CustomerButton from '../Components/Buttons/CustomerButton';
const MyCart = ({navigation}) => {
    const [product, setProduct] = useState()
    const [total, setTotal] = useState(null)
    useEffect(() => {
    //   const unsubscribe= navigation.addListener("focus",()=>{
    //     getDataFromDB();
    //   })
    getDataFromDB();
    }, [navigation])
    
    const getDataFromDB=async()=>{
        let items=await AsyncStorage.getItem("cartItem")
        items = JSON.parse(items);
        let productData=[];
        if(items){
            products.forEach(data=>{
                if(items.includes(String(data.id))){
                    productData.push(data)
                    return;
                }
            })
            setProduct(productData)
            getTotal(productData) 
        }
        else{
            setProduct(false)
            getTotal(false)
        }
        // // const resp=await AsyncStorage.getItem("cartItem");
        // // setProduct(resp)
    }
const getTotal=(productData)=>{
    let total=0;
    for(let index=0; index<productData.length;index++){
        let productPrice= productData[index].productPrice
        total=total+productPrice;
    }
    setTotal(total);
}



const [contador,setContador]=useState(1);
const sumar=()=>setContador(contador+1);

    const restar=()=>{
        if(contador<2){
            setContador(1)
        }else{
            setContador(contador-1)
        }
    }
const renderProduct =(data,index)=>{
    return(
        <TouchableOpacity key={data.id} style={{width:"100%",
         height:100,marginVertical:6,flexDirection:"row",
         backgroundColor:COLORS.light, borderRadius:10,}}
         onPress={()=>navigation.navigate("Details",data)}>
            <View style={{
                width:"30%",height:100,
                padding:12,flexDirection:"row",
                alignItems:"center",justifyContent:"center",
                backgroundColor:COLORS.light,
                borderRadius:10,
                marginRight:22
            }}>
                <Image source={data.img}
                style={{width:"100%",height:"100%",resizeMode:"contain"}}/>
            </View>
            <View style={{
                flex:1,
                height:"100%",
                justifyContent:"space-around"
            }}>
                <View>
                    <Text style={{fontSize:18,maxWidth:"100%",color:COLORS.dark,
                    fontWeight:"600",letterSpacing:1}}>{data.name}</Text>
                    <View style={{marginTop:5, alignContent:"center"}}>
                        <Text style={{fontSize:14,fontWeight:"400",
                        maxWidth:"85%",marginLeft:4,opacity:0.6
                        }}>${data.price}</Text>
                    </View>
                </View>
                <View style={{flexDirection:"row", alignItems:"center"}}>
                <TouchableOpacity onPress={restar}>
                    <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>-</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:18,marginHorizontal:10,fontWeight:"bold"}}>{contador}</Text>
                <TouchableOpacity onPress={sumar}>
                    <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>+</Text>
                    </View>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{marginHorizontal:10,marginVertical:5}}>
                <TouchableOpacity onPress={()=>removeItemFromCart(data.id)}>
                    <FontAwesome name="trash" size={22}  color="#f00" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}
  return (
    <SafeAreaView style={{backgroundColor:"#fffccc"}}>
        <View style={style.header}>
            <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            <View style={{display:"flex", flexDirection:"row", width:"20%", justifyContent:"space-between"}}>
                <TouchableOpacity onPress={()=>console.log(product)}><FontAwesome name="user-circle-o" size={24} color="black" /></TouchableOpacity>
                <FontAwesome name="shopping-cart" size={24} />
            </View>
        </View>
        <View style={{
            width:"100%",
            height:"100%",
            backgroundColor:COLORS.white,
            padding:20,
            paddingTop:10,
            marginTop:15,
            borderRadius:25
        }}>
            <ScrollView style={{height:"50%"}}>
                <View>
                    <Text style={{fontSize:20,
                    color:COLORS.dark,
                    fontWeight:"400",
                    letterSpacing:1,
                    paddingTop:2, marginBottom:10}}>My Cart</Text>
                    <View>
                        {product?product.map(renderProduct):null}
                    </View>
                </View>
            </ScrollView>
            <View style={{height:"50%"}}>
                <TouchableOpacity style={{width:"100%"}}>
                    <CustomerButton text="Completar"/>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default MyCart

const style = StyleSheet.create({
    header:{paddingHorizontal:20,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
    },borderBtn:{
        borderColor:"grey",
        borderWidth:1,
        borderRadius:20,
        height:40,
        width:40,
        justifyContent:"center",
        alignItems:"center"
    },
    borderBtnText:{
        fontWeight:"bold",
        fontSize:28
    },
});