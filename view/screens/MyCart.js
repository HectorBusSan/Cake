import { View, Text,StyleSheet,SafeAreaView, ScrollView,Image,Alert, ToastAndroid } from 'react-native'
import React,{useState,useEffect} from 'react'
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage"
import products from '../../consts/products';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import CustomerButton from '../Components/Buttons/CustomerButton';
import {sendOrder} from "../../api"

const MyCart = ({navigation,route}) => {
    const Usuario= route.params;
    const [product, setProduct] = useState();
    const [total, setTotal] = useState(null);
    const [counter, setCounter] = useState([]);
    const [respuesta, setRespuesta] = useState([])
    const [pedido, setPedido] = useState([])
    const [subtotal, setSubtotal] = useState([])
    const [final, setFinal] = useState()
    
    useEffect(() => {
        getDataFromDB();
    }, [navigation])
    useEffect(()=>{
        let fecha= new Date();
        let nextday=addDays(fecha,5)
        let arrayResult=[]
        for (let index = 0; index < counter.length; index=index+3) {
            let codigoCake= Number(counter[index])
            let cantidadCake= counter[index + 1]
            let precioCake=counter[index + 2]
            let totalCake= precioCake*cantidadCake; 
            console.log("contendo: ",counter[index]);
            arrayResult.push({
                codigop:1,
                idproducto:codigoCake,
                cantidad:cantidadCake,
                total:totalCake,
                fechaf: nextday,
                username:Usuario.username
            });
        }
        setPedido(arrayResult)
    },[final])
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
            setPedido([]);
        }
        else{
            setProduct(false)
            getTotal(false)
            setFinal(false)
            setSubtotal(false)
        }
        // // const resp=await AsyncStorage.getItem("cartItem");
        // // setProduct(resp)
        let counterArray= await AsyncStorage.getItem("cantidad");
        counterArray= JSON.parse(counterArray)
        let dataCantidad=[]
        if(counterArray){
            dataCantidad=counterArray;
            setCounter(dataCantidad);
            // console.log(dataCantidad);
        }else{
            console.log("no se ha encontrado nada")
        }
    }

    const getTotal=(productData)=>{
        let total=0;
        for(let index=0; index<productData.length;index++){
            let productPrice= Number(productData[index].price)
            total=total+productPrice;
        }
        setTotal(total);
    }
    
    const removeItemFromCart=async(id)=>{
        setCounter(0)
        let itemArray=await AsyncStorage.getItem("cartItem");
        itemArray= JSON.parse(itemArray);
        if(itemArray){
            let arrays=itemArray.map(data=>Number(data));
            console.log(itemArray)
            console.log(arrays)
            console.log("-array-")
            for (let index = 0; index < itemArray.length; index++) {
                // console.log(arrays[index])
                if(arrays[index]===id){
                    arrays.splice(index,1);
                }
                let arr= arrays.map(data=>String(data));
                await AsyncStorage.setItem("cartItem",JSON.stringify(arr));
                console.log(await AsyncStorage.getItem("cartItem"));
                getDataFromDB();
            }       
        }
        let counterArray=await AsyncStorage.getItem("cantidad");
        counterArray= JSON.parse(counterArray);
        let iden=String(id);
        let arrays2=counterArray.map(data=>data);
        if(counterArray){
            for (let index = 0; index < counterArray.length; index=index+3) {
                // console.log(arrays[index])
                let ix= counterArray[index + 1]
                let ix2= counterArray[index + 2]
                if(arrays2[index]==iden){
                    arrays2.splice(index+2,1);
                    arrays2.splice(index+1,1);
                    arrays2.splice(index,1);
                }
                await AsyncStorage.setItem("cantidad",JSON.stringify(arrays2));
                console.log(await AsyncStorage.getItem("cantidad"));
                setFinal();
                getDataFromDB();
                // setPedido();
            }
        }
    }
    
    const [contador,setContador]=useState(1);

    
const sumar=()=>setContador(contador+1)

    const restar=()=>{
        if(contador<2){
            setContador(1)
        }else{
            setContador(contador-1)
        }
    }

// const send=async()=>{
//     let cart=await AsyncStorage.getItem("cartItem")
//     let itemCart= cart.map(cart=>Number(cart));
//     console.log(itemCart);
// }


function addDays(date,days){
    var res =new Date(date);
    res.setDate(res.getDate()+days);
    return res;
}

let arrayAmount=[]

const checkPrice=()=>{
    console.log(counter)
    let sumando=0;
    // setPedido([])
    for (let index = 0; index < counter.length; index=index+3) {
        let inde1= counter[index+1];
        let inde2= counter[index+2];
        let multi=inde1*inde2;    
        if(!isNaN(multi)){
            // console.log(multi);
            arrayAmount.push(multi)
            setSubtotal(arrayAmount);
            sumando=sumando+multi;
            setFinal(sumando);
        }
    }
}

const send=async()=>{
    for (let index = 0; index < pedido.length; index++) {
        console.log("-------------")
        console.log("Pedido: ",index)
        console.log(pedido[index]);
        await sendOrder(pedido[index]);
        // return;
    }
    console.log("Mostrar todos los productos;")
    console.log(pedido);
    // console.log("hola");
    await AsyncStorage.setItem("cartItem",JSON.stringify([]));
    await AsyncStorage.setItem("cantidad",JSON.stringify([]));
    setPedido()
    setSubtotal()
    setFinal()
    getDataFromDB();
    navigation.navigate("Pedidos");
}

const sending=()=>{
    const fecha= new Date();
    let nextday=addDays(fecha,5)
    for (let index = 0; index < counter.length; index=index+3) {
        let codigoCake= Number(counter[index])
        let cantidadCake= counter[index + 1]
        let precioCake=counter[index + 2]
        let totalCake= precioCake*cantidadCake; 
        console.log("contendo: ",counter[index]);
        // if(index<=3){
        //     setPedido({
        //         codigop:1,
        //         idproducto:codigoCake,
        //         cantidad:cantidadCake,
        //         total:totalCake,
        //         fechaf: nextday,
        //         username:"usuario1"
        //     })
        //     console.log("---",pedido)
        // }else{
        //     setPedido([...pedido,{
        //         codigop:1,
        //         idproducto:codigoCake,
        //         cantidad:cantidadCake,
        //         total:totalCake,
        //         fechaf: nextday,
        //         username:"usuario1"
        //     }])
        //     console.log("---",pedido)
        // }
        setPedido([...pedido,{
                    codigop:1,
                    idproducto:codigoCake,
                    cantidad:cantidadCake,
                    total:totalCake,
                    fechaf: nextday,
                    username:"usuario1"
                }])
    }
    // return pedido;
    console.log(pedido);
}
// useEffect(() => {
//   return () => {
//     Alert.alert(
//         "Envio de Pedido",
//         "¿Estas Seguro de mandar tu Pedido?",
//         [
//             {
//                 text:"yes",onPress:send
//             },{
//                 text:"No",onPress:()=>console.log("no")
//             }
//         ]
//     )
//   }
// }, [pedido])
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
                {/* <TouchableOpacity onPress={restar}>
                    <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>-</Text>
                    </View>
                </TouchableOpacity>
                <Text style={{fontSize:18,marginHorizontal:10,fontWeight:"bold"}}>{pos}</Text>
                <TouchableOpacity onPress={()=>sumar(data.id)}>
                    <View style={style.borderBtn}>
                        <Text style={style.borderBtnText}>+</Text>
                    </View>
                </TouchableOpacity> */}
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
                <TouchableOpacity onPress={()=>console.log()}><FontAwesome name="user-circle-o" size={24} color="black" /></TouchableOpacity>
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
            <ScrollView style={{maxHeight:"50%"}}>
                <View>
                    <Text style={{fontSize:20,
                    color:COLORS.dark,
                    fontWeight:"400",
                    letterSpacing:1,
                    paddingTop:2, marginBottom:10}}>My Cart</Text>
                    <View style={{flexDirection:"row"}}>
                    <View style={{flex:3}}>
                        {product?product.map(renderProduct):null}
                    </View>
                    <View style={{marginLeft:20}}>
                        <Text style={{fontSize:22}}>Total:</Text>
                        <Text style={{fontSize:18}}>
                        ${final<=1?null:final}
                        </Text>
                    </View>
                    </View>
                </View>
            </ScrollView>
            <View style={{maxHeight:"50%"}}>
                <View>
                    <Text style={{fontSize:18,marginBottom:20,marginLeft:10}}>SubTotal: ${total} por unidades</Text>
                </View>
                <TouchableOpacity onPress={checkPrice} style={{width:"100%"}}>
                    <CustomerButton text="Total"/>
                </TouchableOpacity>
                {/* <View>
                    <Text style={{fontSize:18,marginBottom:10,marginTop:10,marginLeft:10}}>Total: ${final<=1?"?":final}</Text>
                </View> */}
                {
                    final>1?
                <TouchableOpacity onPress={send} style={{width:"100%"}}>
                    <CustomerButton text="Completar"/>
                </TouchableOpacity>:
                <TouchableOpacity onPress={()=>{ToastAndroid.show(
                    "Preciona Total para terminar tu pedido",
                    ToastAndroid.SHORT,
                )}} style={{width:"100%"}}>
                    <CustomerButton type="TETIARY" text="Completar"/>
                </TouchableOpacity>
                }   
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