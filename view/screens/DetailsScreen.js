import React from "react";
import {View,Text,StyleSheet, SafeAreaView, Image}from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const DetailsScreen=({navigation,route})=>{
    const product = route.params;
    console.log(product)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
                <FontAwesome name="shopping-cart" size={24}/>
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
                    <Text style={{color:"grey",fontSize:16,lineHeight:22,marginTop:20}}>{product.about}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{paddingHorizontal:20,
        marginTop:15,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    imageContainer:{
        flex:0.45,
        marginTop:20,
        justifyContent:"center",
        alignItems:"center"
    },
    detailsContainer:{
        flex:0.55,
        backgroundColor:COLORS.light,
        marginHorizontal:7,
        marginBottom:7,
        marginTop:30,
        paddingTop:30,
        borderRadius:40
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
    }
})
export default DetailsScreen;