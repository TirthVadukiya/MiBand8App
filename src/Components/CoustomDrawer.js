import React from 'react';
import {
  DrawerContentScrollView,
 
} from '@react-navigation/drawer';  
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Share
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

function CustomDrawer({props, navigation}) {

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };



  return (
    <DrawerContentScrollView style={{backgroundColor: 'black'}} {...props} showsVerticalScrollIndicator={false}>
      {/* Profile Detail */}
     
   
    

      {/* DrawerTabScreen */}

      <View style={{padding: 18, flex: 1}}>
        <TouchableOpacity style={{marginBottom: 10,flexDirection:"row",alignItems:'center',justifyContent:'space-evenly',right:50}} onPress={onShare}>
            <Icon name={'share-social'} size={20} color={"white"}/>
          <Text style={styles.DrawerTxt}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}} >
          <Text style={styles.DrawerTxt}>Rate App</Text>
          <Icon name={'share-social'} size={20} color={"white"}/>
        </TouchableOpacity>

        <TouchableOpacity style={{marginBottom: 10}} >
          <Text style={styles.DrawerTxt}>More App</Text>
        </TouchableOpacity>

      </View>

   
     
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
 
  DrawerTxt: {
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Raleway-Medium',
  },
 
});

export default CustomDrawer;
