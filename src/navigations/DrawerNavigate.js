import React from 'react';
import { createDrawerNavigator,DrawerItem,} from '@react-navigation/drawer';

import CustomDrawer from '../Components/CoustomDrawer'
import Home from '../screens/Home/Home';



const Drawer = createDrawerNavigator();

function DrawerNavigate() {
  return (
    <Drawer.Navigator screenOptions={{headerShown:false}} drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="Home" component={Home}  options={{animation: 'slide_from_right'}}/>
    </Drawer.Navigator>
  );
}

export default DrawerNavigate;