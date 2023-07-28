import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    flex: 1,
  },
  watchView: {
    margin: 15,
    borderColor: 'gray',
    //  borderWidth:2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '92%',
    height: 350,
    backgroundColor: '#232020',
  },
  watchImg: {
    resizeMode: 'center',
    height: 300,
    width: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  watchFaceImg: {
    height: 230,
    width: 90,
    borderRadius: 90 / 2,
    marginTop: 5,
    left: 1,
    resizeMode: 'contain',
    //  borderRadius:20,
  },
  WatchDetails: {
    margin: 15,
    borderRadius: 10,
    backgroundColor: '#232020',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  WatchTxt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    left: 10,
    fontFamily:"Poppins-Regular"
  },
  WatchTxt1: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    right: 10,
  },
  InstallTxtView : {
  
   height: 45,
   width: '91%',
   backgroundColor: '#232020',
   margin: 15,
   borderRadius: 10,
   flexDirection: 'row',
   alignItems:"center",
   justifyContent:"center"
  },
  InstallTxt : {
     fontSize:18,
     color:"white",
     fontWeight:'600',
     textAlign:"center"
  },
  DownLoadBtn: {
    height: 50,
    width: '91%',
    backgroundColor: '#0096FF',
    margin: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:110
  },
  BtnTxt: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: "poppins-Regular"
  },
});

export default styles;
