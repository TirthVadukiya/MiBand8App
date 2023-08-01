import React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator,DrawerItem,} from '@react-navigation/drawer';

import CustomDrawer from '../Components/CoustomDrawer'
import Home from '../screens/Home/Home';



const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false,drawerStyle: { width: Dimensions.get('window').width /0.80,}}} 
    drawerContent={(props) => <CustomDrawer {...props}  />}  options={{animation: 'slide_from_right'}}>
      <Drawer.Screen name="Home" component={Home}  options={{animation: 'slide_from_right'}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigate;