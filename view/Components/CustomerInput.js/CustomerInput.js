import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomerInput = ({value,setValue,Placeholder,secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={Placeholder}
        style={style.input}
        secureTextEntry={secureTextEntry}/>
    </View>
  )
}
const style= StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        width:"100%",
        borderColor:"#e8e8e8",
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginHorizontal:10,
        marginVertical:5
    },input:{
        
    }
})
export default CustomerInput