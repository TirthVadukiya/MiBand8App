import { View, Text, ImageBackground,Image,ActivityIndicator } from 'react-native'
import React, {useEffect} from 'react'
import styles from '.';

const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
          navigation.replace("mainHome");
        }, 3000);
      }, []);

  return (
    <View style={styles.main}>
        <View style={styles.ImgView}>
       <Image source={require("../../../assets/Images/MiBand.png")} style={styles.SplashImg}/>
       </View>
       <ActivityIndicator size="50" color="#0000ff" />
       <View style={styles.TxtView}>
        <Text style={styles.SplashTxt}>Mi Band 8 Watch Faces</Text>
       </View>
    </View>
  )
}

export default Splash

