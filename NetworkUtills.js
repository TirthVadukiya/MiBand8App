import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import NetInfo from '@react-native-community/netinfo';

const NetworkUtills = () => {

  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return isConnected;



 
}

export default NetworkUtills


