import React from "react";
import {StyleSheet } from "react-native"
import { create } from "react-test-renderer";

const styles = StyleSheet.create ({
   main : {
    flex:1,
    backgroundColor:"black"
   },
   headerView: {
      backgroundColor:"#232020",height:50,alignItems:"center",justifyContent:"center"
    },
    headerTxt : {
      fontSize: 20,color:"white",fontFamily:"Poppins-Regular"
    },
    InstallTxt :{
      textAlign:"justify",
      fontSize:15,
      fontFamily:"Poppins-Regular",
      color:"white"
      
    }
})

export default styles