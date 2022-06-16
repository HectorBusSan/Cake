import React from "react";
import {View,Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, FlatList, Image} from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import products from "./../../consts/products";

const width =Dimensions.get('screen').width/2-30

const HomeScreen=({navigation})=>{
    const categories=['Popular','Cakes','Dessert','Perzonalized'];

    const [categoryIndex,setCategoryIndex]=React.useState(0);

    const CategoryList=()=>{
        return(
        <View style={style.categoryContainer}>
            {categories.map((item,index)=>(
                <TouchableOpacity key={index}
                activeOpacity={0.8}
                onPress={()=>setCategoryIndex(index)}>
                    <Text
                    style={[style.categoryText,
                        categoryIndex==index && style.categoryTextSelected,
                    ]}>
                    {item}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>);
    }

    const Card = ({product})=>{
        return (
        <TouchableOpacity activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', product)}>
            <View style={style.card}>
                <View style={{alignItems:'flex-end'}}>
                    <View style={{width:30,height:30, borderRadius:15,
                    alignItems:"center",justifyContent:"center",
                    backgroundColor:product.like?"rgba(245,42,42,0.2)":"rgba(0,0,0,0.2)"
                    }}>
                        <MaterialIcons name="favorite" size={18} color={product.like?COLORS.red:COLORS.dark}/>
                    </View>
                </View>
                    <View style={{height:100,alignItems:"center"}}>
                        <Image source={product.img} style={{flex:1, resizeMode:'contain'}}/>
                    </View>
                    <Text style={{fontWeight:'bold',fontSize:17,marginBottom:10}}>{product.name}</Text>
                <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:5}}>
                    <Text style={{fontSize:16,fontWeight:"bold"}}>${product.price}</Text>
                    <View style={{
                        height:25,
                        width:25,
                        backgroundColor:COLORS.green, 
                        borderRadius:5,
                        justifyContent:"center",
                        alignItems:"center",
                        }}>
                        <FontAwesome name="plus" fontWeight="bold" size={15} color={COLORS.white}/>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
        );
    }

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
            <CategoryList/>
            <FlatList columnWrapperStyle={{justifyContent:"space-between"}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop:10,
                paddingBottom:50
            }}
            numColumns={2} data={products}
            renderItem={({item})=>{
                return <Card product={item}/>}}/>
        </SafeAreaView>
    )
}
// renderItem={({item})=><Card product={item}/>}
const style=StyleSheet.create({
    header:{
        marginTop:30,
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
    },categoryContainer:{
        flexDirection:"row",
        marginTop:30,
        marginBottom:20,
        justifyContent:"space-between"
    },
    categoryText:{fontSize:16,color:"gray",fontWeight:"bold"},
    categoryTextSelected:{
        color:COLORS.green,
        paddingBottom:5,
        borderBottomWidth:2,
        borderColor:COLORS.green,
    },
    card:{
        height:225,
        backgroundColor:COLORS.light,
        width,
        marginHorizontal:2,
        borderRadius:20,
        marginBottom:20,
        padding:15,
    },
});
export default HomeScreen;