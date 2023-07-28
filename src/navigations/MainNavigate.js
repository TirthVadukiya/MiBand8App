import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home/Home';
import Details from '../screens/Details/Details';
import Splash from '../screens/Splash/Splash';
import Learn from '../screens/learn/Learn';
import DrawerNavigate from './DrawerNavigate';


const stack = createNativeStackNavigator(); 

const MainNavigate = () => {
  return (
    <NavigationContainer>
         <stack.Navigator screenOptions={{headerShown:false}} initialRouteName={Splash}>
            <stack.Screen name='Splash' component={Splash} />
            <stack.Screen name='mainHome' component={DrawerNavigate}/>
            {/* <stack.Screen name='Home' component={Home}/> */}
            <stack.Screen name='Details' component={Details}/>
            <stack.Screen name='Learn'  component={Learn}/>
         </stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigate