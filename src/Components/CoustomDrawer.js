import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Share,
  Linking
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';

function CustomDrawer({props, navigation}) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Mi Band Watch Faces App, https://play.google.com/store/apps/details?id=com.miwatcheight ',
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

  const Rate =()=> {
    return (
      Linking.openURL(`market://details?id=${"com.miwatcheight"}`).catch(err =>
      alert('Please check for the Google Play Store')
    )
    )
  }

  return (
    <DrawerContentScrollView
      style={{backgroundColor: 'black',  }}
      {...props}
      showsVerticalScrollIndicator={false}
      options={{animation: 'slide_from_right'}}
      >
      {/* Profile Detail */}

      <View style={{marginTop: 20,alignItems:"center"}}>
        <Image
          source={require('../../assets/Images/MiBand.png')}
          style={styles.WatchImg}
        />
      </View>

      <View
        style={{
          height: 1,
          width: '83%',
          backgroundColor: '#f5f5f5',
          margin: 20,
          right:6
        }}></View>

      {/* DrawerTabScreen */}

      <View style={{padding: 20, flex: 1,left:15}}>
        <TouchableOpacity style={styles.BtnView} onPress={onShare}>
          <Icon name={'share-social'} size={20} color={'white'} />
          <Text style={styles.DrawerTxt}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnView} onPress={Rate}>
          <Icon name={'star-outline'} size={20} color={'white'} />
          <Text style={styles.DrawerTxt}>Rate App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.BtnView}>
          <Icons name={'plus'} size={20} color={'white'} />
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
    fontFamily: 'Poppins-Regular',
    fontSize:15

  },
  BtnView: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    right: 50,
    margin: 15,
  },
  WatchImg: {
    resizeMode: 'contain',
    height: 250,
  },
});

export default CustomDrawer;
