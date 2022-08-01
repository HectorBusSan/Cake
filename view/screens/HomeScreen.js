import React, { useEffect, useState } from "react";
import {View,Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, FlatList, Image, Animated} from "react-native";
import COLORS from "../../consts/colors";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import products from "./../../consts/products";


const width =Dimensions.get('screen').width/2-30

const HomeScreen=({navigation,route})=>{
    const categories=['Popular','Cakes','Dessert','Perzonalized'];
    
    const [categoryIndex,setCategoryIndex]=React.useState(0);

    const Usuario= route.params;

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

    const [search,setSearch]=useState("");
    const handlerChange=(valor)=>{
        setSearch(valor);
        // console.log("-Busqueda: "+search);
    }

    const Card = ({product})=>{
        return (
        <TouchableOpacity activeOpacity={0.8}
        onPress={() => navigation.navigate('Details', product)}>
            <View style={product.name!=search&&search.length>2?style.cardnone:product.category===categoryIndex? style.card:categoryIndex===0?style.card:style.cardnone}>
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
    const [fadeIn,setFadeIn]= useState(new Animated.Value(-300));
    const showProfile=()=>{
        Animated.timing(fadeIn,{
            toValue:150,
            duration:3000,
        }).start();
    }

    const hiddenProfile=()=>{
        Animated.timing(fadeIn,{
            toValue:-300,
            duration:3000,
        }).start();
    }
        
    
    const Profile=()=>{
        return(
            <Animated.View style={{...style.card,backgroundColor:COLORS.green,position:"absolute",width:"100%",marginLeft:20,marginRight:20,
            display:"flex", flexDirection:"column", alignItems:"center",zIndex:100,padding:20, top:fadeIn}}>
                <TouchableOpacity onPress={hiddenProfile} style={{position:"absolute",right:20,top:15}}><FontAwesome name="close" size={24} color="black"/></TouchableOpacity>
                <Text style={{marginTop:10,fontSize:24,color:COLORS.white, fontWeight:"bold", marginBottom:10}}>Usuario: {Usuario.username}</Text>
                {Usuario.rol===1?<Text style={{...style.buttonP,marginBottom:5,backgroundColor:"#ffc107"}}>Pedidos</Text>:<Text style={{...style.buttonP,marginBottom:5,backgroundColor:"#ffc107"}}>Mis Pedidos</Text>}
                {Usuario.rol===1?<TouchableOpacity onPress={() => navigation.navigate("Productos")}><Text style={{...style.buttonP,marginBottom:5,backgroundColor:"#007bff"}}>Crear Productos</Text></TouchableOpacity>
                :<Text style={{...style.buttonP,marginBottom:5,backgroundColor:"#007bff"}}>Carrito</Text>}
                <Text style={style.buttonP}>Cerrar Sessión</Text>
                {/* <Animated.Text style={{fontSize:28,opacity:fadeIn}}>Hola</Animated.Text> */}
            </Animated.View>
        )
    }

    return (
        <SafeAreaView style={{flex:1,
        paddingHorizontal:20,
        backgroundColor:COLORS.white}}>
            <Profile Usuario={Usuario}/>
            <View style={style.header}>
                <View>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Bienvenido a el</Text>
                    <Text style={{fontSize:34,fontWeight:"bold",color:COLORS.green}}>Palacio del Sabor</Text>
                </View>
                <View style={{display:"flex", flexDirection:"row", width:"20%", justifyContent:"space-between"}}>
                    <TouchableOpacity onPress={showProfile}><FontAwesome name="user-circle-o" size={24} color="black" /></TouchableOpacity>
                    <TouchableOpacity onPress={()=>navigation.navigate("MyCart")}><FontAwesome name="shopping-cart" size={24} /></TouchableOpacity>
                </View>
            </View>
                <View style={{marginTop:30, flexDirection:"row", alignItems:"center", zIndex:10}}>
                    <View style={style.searchContainer}>
                        <FontAwesome name="search" size={19} style={{marginLeft:20}}/>
                        <TextInput value={search} placeholder=" Search..." style={style.input} onChangeText={(text)=>handlerChange(text)}/>
                    </View>
                    <TouchableOpacity onPress={()=>{
                       setCategoryIndex(0)
                       setSearch("");
                    }}>
                    <View style={style.sortBtn}>
                        <MaterialIcons name="sort" size={30} color={COLORS.white}/>
                    </View>
                    </TouchableOpacity>
                </View>
            <CategoryList/>
            <FlatList columnWrapperStyle={{justifyContent:"space-between"}}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                marginTop:10,
                width:"100%",
                paddingBottom:50,
                flexWrap:"wrap",
                flexDirection:"row",
            }}
            numColumns={2} data={products}
            renderItem={({item})=>{
                return <Card product={item}/>}}/>
        </SafeAreaView>
    )
}
const style=StyleSheet.create({
    header:{
        marginTop:50,
        flexDirection:"row",
        justifyContent:"space-between",
        zIndex:10
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
        height:245,
        backgroundColor:COLORS.light,
        width,
        marginHorizontal:2,
        borderRadius:20,
        marginBottom:20,
        padding:15,
    },
    buttonP:{
        fontSize:18,
        padding:8,
        marginTop:10,
        backgroundColor:"#dc3545",
        borderRadius:5
    },cardnone:{
        display:"none"
    }
});
export default HomeScreen;