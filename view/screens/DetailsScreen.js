import React from "react";
import {View,Text,StyleSheet, SafeAreaView}from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const DetailsScreen=({navigation,route})=>{
    const product = route.params;
    console.log(product)
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.white}}>
            <View style={style.header}>
                <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={()=>{navigation.goBack()}}/>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    header:{paddingHorizontal:20, marginTop:20,flexDirection:"row",justifyContent:"space-between"}
})
export default DetailsScreen;