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
  SafeAreaView
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import styles from '.';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import database, {FirebaseDatabaseTypes} from '@react-native-firebase/database';
import  NetInfo  from '@react-native-community/netinfo';
import NetworkUtils from '../../../NetworkUtills';
import CustomDialogNetwork from '../../utils/CustomDialogNetwork';


const Home = ({navigation}) => {

  const [data, setData] = useState([]);
const isConnected = NetworkUtils();
  const flatListRef = useRef(null);

  useEffect(() => {
    const backAction = () => {
      if (navigation.isFocused()) {
        Alert.alert('Are you sure you want to exit?', [
          {
            text: 'NO',
            onPress: () => null,
            style: 'No',
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
          .ref().child('MiBand8')
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
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontFamily: 'Poppins-Regular',
              }}>
              GET WATCH
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.Main}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      {/* HeaderBar */}

      <View style={styles.headerView}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../../assets/Images/iconDrawer.png')}
            style={{resizeMode: 'contain', height: 20}}
          />
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Mi Band 8 Watch Faces</Text>
      </View>

      {data.length > 0 ? (
        <FlatList
          numColumns={2}
          data={data}
          renderItem={renderItem}
          scrollEnabled={true}
          keyExtractor={(item, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
      ) : null}
       {isConnected ? null : <CustomDialogNetwork visible={true} />}
    </SafeAreaView>
  );
};

export default Home;
