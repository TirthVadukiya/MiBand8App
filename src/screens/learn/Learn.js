import { View, Text } from 'react-native'
import React from 'react'
import styles from '.'


const Learn = () => {
  return (
    <View style={styles.main}>
        {/* HeaderBar */}

      <View style={styles.headerView}>
         <Text style={styles.headerTxt}>How To Install</Text>
       
      </View>

      {/* text */}

     <View style={{margin:8,marginTop:10}}>
          <Text style={styles.InstallTxt}>- If you don't know how to install Mi Band 8 watch faces, don't worry.</Text>
          <Text style={styles.InstallTxt}>- Here is a simple step-by-step guide for installation:</Text>
        <View style={{marginTop:8,marginRight:10,margin:5}}>
           <Text style={styles.InstallTxt}>1. Connect your Mi Band 8 to your mobile phone using the Zepp Life app.</Text>
           <Text style={styles.InstallTxt}>2. Open the Mi Band 8 Watch Faces application on your phone..</Text>
           <Text style={styles.InstallTxt}>3. Look for an option with three lines at the bottom of the screen and tap on it.</Text>
           <Text style={styles.InstallTxt}>4. Choose "Install Your Watch Face" from the menu.</Text>
           <Text style={styles.InstallTxt}>5. Now, you need to add the downloaded .bin file from the app. Select it and tap on "Add Watch Face."</Text>
           <Text style={styles.InstallTxt}> 6. Click on "Sync Directly with Watch" to sync the watch face with your Mi Band 8.</Text>
           <Text style={styles.InstallTxt}> 7. Finally, tap on "Set WatchFace" to complete the installation process.</Text>
        </View>
        <Text style={styles.InstallTxt}>- Your MI Band 8 watch face is now successfully installed on your band. Enjoy!</Text>
     </View>

    </View>
  )
}

export default Learn