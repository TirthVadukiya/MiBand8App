import { View, Text ,Image,SafeAreaView} from 'react-native'
import React from 'react'
import MainNavigate from './src/navigations/MainNavigate'
import { MenuProvider } from 'react-native-popup-menu'

const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
    <MenuProvider>
   <MainNavigate/>
   </MenuProvider>
   </SafeAreaView>
  )
}

export default App