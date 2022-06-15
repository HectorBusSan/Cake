import React from "react";
import {View,Text, SafeAreaView, StyleSheet} from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome } from "@expo/vector-icons";

const HomeScreen=()=>{
    return (
        <SafeAreaView style={{flex:1,
        paddingHorizontal:20,
        backgroundColor:COLORS.white}}>
            <View style={style.header}></View>
                <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome to </Text>
                    <Text style={{fontSize:38,fontWeight:"bold",color:COLORS.green}}>Cakes Shop</Text>
                    <FontAwesome name="shopping-cart" size={24}/>
                </View>
        </SafeAreaView>
    )
}

const style=StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between",

    }
})
export default HomeScreen;