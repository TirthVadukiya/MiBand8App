import React from 'react';
import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({
  Main: {
    backgroundColor: "#000000",
    flex:1
  },
  headerView: {
    backgroundColor:"#232020",height:50,flexDirection:'row',alignItems:"center"
  },
  headerTxt : {
    fontSize: 20,color:"white",fontFamily:"Poppins-Regular",
  },
 
  CardView: {
    height: Dimensions.get('window').height=300/1,
    width: Dimensions.get('window').width=170/1,
    backgroundColor: '#232020',
    margin: 8,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:"space-evenly"
  },
  WatchFace: {
    resizeMode: 'center',
    height: 210,
    width: 80,
    overflow: 'hidden',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  FaceImg: {
    height: 185,
    width: 60,
    borderRadius: 90 / 2,
    marginTop: 15,
    resizeMode: 'contain',
    overflow: 'hidden',
  },
  WatchBtn : {
    height:35,
    width:110,
    backgroundColor:"#0096FF",
    borderRadius:17,
    justifyContent:"center"
  }
});

export default styles;
