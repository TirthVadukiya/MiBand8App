import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  StatusBar
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNFetchBlob from 'react-native-fetch-blob';
import RNFS from 'react-native-fs';

function getFileNameFromURL(url) {
  const segments = url.split('/');
  return segments[segments.length - 1];
}



const Details = ({route,navigation}) => {
  const [value, setValue] = useState('Download');

  const requestExternalStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Storage Permission',
          message: 'App needs access to your storage to download the file.',
        },
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (err) {
      console.log('Error requesting permission:', err);
      return false;
    }
  };

  const downloadFile = async () => {
    const url = route.params.data.bin_file;
    const fileName = getFileNameFromURL(url);

    const customDirectoryPath = `${RNFetchBlob.fs.dirs.DownloadDir}/Mi band watch face`;
    const destination = `${customDirectoryPath}/${fileName}`;

    RNFS.exists(destination)
  .then((exists) => {
    if (exists) {
      setValue('Already Download');
    } else {
     downloadBinFile(destination,url)
    }
  })
  .catch((error) => {
    console.log(error);
  });

 
  };

  async function downloadBinFile(destination,url){
    try {
      const granted = Platform.Version >= 33 ? true : await requestExternalStoragePermission();
      if (granted) {
        const configOptions = {
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            title: 'Mi band watch face Download',
            description: 'Downloading bin file...',
            mime: 'application/octet-stream',
            path: destination,
          },
        };

        const res = await RNFetchBlob.config(configOptions).fetch('GET', url);

        console.log('Download finished!', res.path());
      } else {
        console.log('Permission denied');
      }
    } catch (error) {
      console.error('Error during download:', error);
    }
  }

  return (
    <View style={styles.main}>

<StatusBar
        backgroundColor="black"
        barStyle="light-content"
     />

      {/* WatchImg */}

      <View style={styles.watchView}>
        <ImageBackground
          source={require('../../../assets/Images/wfback.png')}
          style={styles.watchImg}>
          <Image
            source={{uri: route.params.data.image}}
            style={styles.watchFaceImg}
          />
        </ImageBackground>
        <TouchableOpacity style={{justifyContent:"flex-end",left:135}} onPress={()=> navigation.navigate("Learn")}>
          <Image source={require("../../../assets/Images/Info.png")} style={{resizeMode:"center",height:25,width:25}} />
        </TouchableOpacity>

      </View>

      {/* watchDetails */}

      <View style={styles.WatchDetails}>
        <Text style={styles.WatchTxt}>Author</Text>
        <Text style={styles.WatchTxt1}>{route.params.data.author}</Text>
      </View>

      <View style={styles.WatchDetails}>
        <Text style={styles.WatchTxt}>Language</Text>
        <Text style={styles.WatchTxt1}>{route.params.data.language}</Text>
      </View>

      {/* <TouchableOpacity style={styles.InstallTxtView} onPress={()=> navigation.navigate("Learn")}>
        <Text style={styles.InstallTxt} >How to Install</Text>
      </TouchableOpacity> */}

      {/* DownLodBtn */}

      <TouchableOpacity style={styles.DownLoadBtn} onPress={downloadFile}>
        <Text style={styles.BtnTxt}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Details;


