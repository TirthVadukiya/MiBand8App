import React from "react";
import { StyleSheet} from "react-native"

const styles = StyleSheet.create ({
   main : {
    flex:1,
    backgroundColor:"black",
   
   },
   ImgView : {
     flex:0.8,
     justifyContent:"center",
     alignItems:"center",
     marginTop:50,
    //  backgroundColor:"white"
     
   },
   SplashImg : {
     
     height:400,width:125
   },
   TxtView : {
     top:40
   },
   SplashTxt: {
      fontSize:30,
      fontWeight:"600",
      color:"white",
      textAlign:'center'
   }

})

export default styles