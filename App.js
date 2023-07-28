import { View, Text ,Image} from 'react-native'
import React from 'react'
import MainNavigate from './src/navigations/MainNavigate'
import { MenuProvider } from 'react-native-popup-menu'

const App = () => {
  return (
    <MenuProvider>
   <MainNavigate/>
   </MenuProvider>
   
  )
}

export default App