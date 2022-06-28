import React from 'react'
import { View,Text, StyleSheet, Pressable } from 'react-native';
import COLORS from '../../../consts/colors';

export const CustomerButton = ({text, type="PRYMARY"}) => {
  return (
    <Pressable style={[styles.container,styles[`container_${type}`]]}>
      <Text style={[styles.text,styles[`text_${type}`]]}>{text}</Text>
    </Pressable>
  )
}

const styles=StyleSheet.create({
  container:{
    width:"100%",
    padding:15,
    marginVertical:5,
    alignItems:"center",
    borderRadius:30
  },
  container_PRYMARY:{
    backgroundColor:"#3B71F3",
  },
  container_TETIARY:{
    borderColor:"#e8e8e8"
  },
  text:{
    fontWeight:"bold",
    color:"#fff"
  },text_TETIARY:{
    color:"gray"
  },container_SECOND:{
    backgroundColor:COLORS.green
  },text_SECOND:{
    color:"#FFF"
  }
})

export default CustomerButton;