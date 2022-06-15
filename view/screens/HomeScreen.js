import React from "react";
import {View,Text, SafeAreaView, StyleSheet} from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const HomeScreen=()=>{
    return (
        <SafeAreaView style={{flex:1,
        paddingHorizontal:20,
        backgroundColor:COLORS.white}}>
            <View style={style.header}>
                <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Welcome to </Text>
                    <Text style={{fontSize:38,fontWeight:"bold",color:COLORS.green}}>Cakes Shop</Text>
                </View>
                <FontAwesome name="shopping-cart" size={24}/>
            </View>
                <View style={{marginTop:30, flexDirection:"row", alignItems:"center"}}>
                    <View style={style.searchContainer}>
                        <FontAwesome name="search" size={19} style={{marginLeft:20}}/>
                        <TextInput placeholder=" Search..." style={style.input} />
                    </View>
                    <View style={style.sortBtn}>
                        <MaterialIcons name="sort" size={30} color={COLORS.white}/>
                    </View>
                </View>
        </SafeAreaView>
    )
}

const style=StyleSheet.create({
    header:{
        marginTop:10,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    searchContainer:{
        height:50,
        backgroundColor:COLORS.light,
        borderRadius:10,
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    input:{
        fontSize:18,
        fontWeight:"bold",
        color:COLORS.dark,
        flex:1,
        marginLeft:10
    },
    sortBtn:{
        margin:10,
        height:50,
        width:50,
        backgroundColor:COLORS.green,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:10
    }
})
export default HomeScreen;