import { View, Text, TextInput, StyleSheet} from 'react-native'
import React from 'react'

const CustomerInput = () => {
  return (
    <View style={style.constainer}>
      <TextInput placeholder='placeholder' style={style.input}/>
    </View>
  )
}
const style= StyleSheet.create({
    container:{

    },input:{
        
    }
})
export default CustomerInput