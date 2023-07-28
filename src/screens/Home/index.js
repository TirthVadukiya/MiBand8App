import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerView: {
    backgroundColor:"#232020",height:50,justifyContent:"center",flexDirection:"row",alignItems:"center"
  },
  headerTxt : {
    fontSize: 20,color:"white",fontFamily:"Poppins-Regular",
  },
 
  CardView: {
    height: 330,
    width: 165,
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
    alignItems:"center",
    justifyContent:"center"
  }
});

export default styles;
