import React, { useState } from "react";
import {View,Text,StyleSheet, SafeAreaView, Image}from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const DetailsScreen=({navigation,route})=>{
    const product = route.params;
    
    const [contador,setContador]=useState(1);

    const sumar=()=>setContador(contador+1);
    const restar=()=>{
        if(!contador<1){
            setContador(contador-1)
        }else{
            return setContador(contador);
        }
    }

    // console.log(product)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
                <View style={{display:"flex", flexDirection:"row", width:"20%", justifyContent:"space-between"}}>
                    <FontAwesome name="user-circle-o" size={24} color="black" />
                    <FontAwesome name="shopping-cart" size={24} />
                </View>
            </View>
            <View style={style.imageContainer}>
                <Image source={product.img} style={{resizeMode:"contain",flex:1,}}/>
            </View>
            <View style={style.detailsContainer}>
                <View style={{marginLeft:20,flexDirection:"row",alignItems:"flex-end"}}>
                    <View style={style.line}/>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>Best Choice</Text>
                </View>
                <View style={{marginLeft:20,marginTop:20,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{fontSize:22,fontWeight:"bold",}}>{product.name}</Text>
                    <View style={style.priceTag}>
                        <Text style={{marginLeft:15,color:COLORS.white,fontWeight:"bold",fontSize:16}}>${product.price}</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:20,marginTop:10}}>
                    <Text style={{fontSize:20,fontWeight:"bold",}}>About:</Text>
                    <Text style={{color:"grey",fontSize:16,lineHeight:22,marginTop:10}}>{product.about}</Text>
                    <View style={{marginTop:20,flexDirection:"row",justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity onPress={restar}>
                                <View style={style.borderBtn}>
                                    <Text style={style.borderBtnText}>-</Text>
                                </View>
                            </TouchableOpacity>
                            <Text style={{fontSize:20,marginHorizontal:10,fontWeight:"bold"}}>{contador}</Text>
                            <TouchableOpacity onPress={sumar}>
                                <View style={style.borderBtn}>
                                    <Text style={style.borderBtnText}>+</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={style.buyBtn}>
                            <Text style={{color:COLORS.white,fontSize:18}}>Buy</Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{paddingHorizontal:20,
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imageContainer:{
        flex:0.45,
        marginTop:10,
        justifyContent:"center",
        alignItems:"center"
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:COLORS.light,
        marginHorizontal:7,
        marginBottom:0,
        marginTop:10,
        paddingTop:30,
        borderTopRightRadius:40,
        borderTopLeftRadius:40
    },
    line:{
        width:25,
        height:2,
        backgroundColor:COLORS.dark,
        marginBottom:5,
        marginRight:3
    },
    priceTag:{
        backgroundColor:COLORS.green,
        width:80,
        height:40,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        justifyContent:"center",
        alignItems:"flex-start",
    },
    borderBtn:{
        borderColor:"grey",
        borderWidth:1,
        borderRadius:5,
        height:40,
        width:60,
        justifyContent:"center",
        alignItems:"center"
    },
    borderBtnText:{
        fontWeight:"bold",
        fontSize:28
    },
    buyBtn:{
        backgroundColor:COLORS.green,
        width:150,
        height:50,
        borderRadius:40,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default DetailsScreen;