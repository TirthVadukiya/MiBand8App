import { View, Text ,Image,SafeAreaView} from 'react-native'
import React from 'react'
import MainNavigate from './src/navigations/MainNavigate'

import OneSignal from 'react-native-onesignal';

const App = () => {

  OneSignal.setAppId('5d40f91a-6d74-439c-a3c2-4a333d2a24e7');

  // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
  // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
  OneSignal.promptForPushNotificationsWithUserResponse();
  
  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
    console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData
    console.log("additionalData: ", data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  });
  
  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log("OneSignal: notification opened:", notification);
  });

  return (
    <SafeAreaView style={{flex:1}}>
   
   <MainNavigate/>
   
   </SafeAreaView>
  )
}

export default App