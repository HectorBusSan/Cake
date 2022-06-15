import React from "react";
import {View,Text, SafeAreaView} from "react-native";
import COLORS from "../../consts/colors";
const HomeScreen=()=>{
    return (
        <SafeAreaView style={{flex:1,
        paddingHorizontal:20,
        backgroundColor:COLORS.white}}>
            <View style={style.header}></View>

        </SafeAreaView>
    )
}

const style=StyleSheet.create({
    header:{
        marginTop:20,
        flexDirection:"row",
        justifyContent:"space-between"
    }
})
export default HomeScreen;