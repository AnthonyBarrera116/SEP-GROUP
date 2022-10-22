import React from "react";

import { Text, TextInput, TouchableOpacity,StyleSheet ,View, Image}    from "react-native";

import MenuButtons from './MenuButtons';
import ProfileButtons from './ProfileButtons';
import NotificationsBox from './NotificationsBox';



export default function Profile(navigation){


  return (<>   

   

      <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
         
        <Text>name</Text>
      
         <View>
         <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}}
            style={{width: 100, height: 100}} />
            
         </View>

         <View style = {{flexDirection:'row'}}>

            <ProfileButtons>

            </ProfileButtons>

         </View>

         <View style = {{marginTop:-100}}>

            <NotificationsBox>

            </NotificationsBox>

         </View>
         
               
         <View style = {{marginTop:-530,flexDirection:'row'}}>

            <MenuButtons items = {navigate}>
            
         </View>
   
    </View>
    </>

  );
   
}
