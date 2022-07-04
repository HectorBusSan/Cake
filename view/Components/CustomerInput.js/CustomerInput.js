import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomerInput = ({value,Placeholder,secureTextEntry}) => {
  return (
    <View style={style.container}>
      <TextInput
        value={value}
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
    }
})
export default CustomerInput