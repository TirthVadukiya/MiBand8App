import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
  StatusBar,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  Menu,
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
 } from "react-native-popup-menu";
import styles from '.';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';

const Home = ({navigation}) => {
  const [data, setData] = useState([]);
  const flatListRef = useRef(null);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Hold on!', 'Are you sure you want to go back?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = database()
          .ref()
          .once('value')
          .then(snapshot => {
            setData(snapshot.val());
            // console.warn(snapshot.val())
          });
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, [data]);

  const renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.CardView}
          key={index}
          onPress={() => navigation.navigate('Details', {data: item})}>
          <ImageBackground
            source={require('../../../assets/Images/wfback.png')}
            style={styles.WatchFace}>
            <View style={{flex: 1}}>
              <Image source={{uri: item.image}} style={styles.FaceImg} />
            </View>
          </ImageBackground>

          <TouchableOpacity
            style={styles.WatchBtn}
            onPress={() => navigation.navigate('Details', {data: item})}>
            <Text style={{fontWeight: 'bold', color: 'white'}}>GET WATCH</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.Main}>
      {/* HeaderBar */}

      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image source={require("../../../assets/Images/iconDrawer.png")} style={{resizeMode:"contain",height:20,}} />
        </TouchableOpacity>
      {/* <Icon name={"dots-vertical"} size={30} color={"white"} style={{right:50}} onPress={() => navigation.openDrawer()}/> */}
        <Text style={styles.headerTxt}>Mi Band 8 Watch Faces</Text>
      
      </View>

      <StatusBar backgroundColor="black" barStyle="light-content" />

      {data.length > 0 ? (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
    </View>
  );
};

export default Home;


