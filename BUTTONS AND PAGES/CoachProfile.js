import {React,Component} from "react";

import { Text, TextInput, TouchableOpacity,StyleSheet ,View, Image}    from "react-native";

import MenuPush from './MenuPush';
import CoachProfileButtons from './CoachProfileButtons';
import NotificationsBox from './NotificationsBox';
import TeamBox from './TeamBox';



export default function Coach({navigation}){

      return (<>   
            <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
               
               <Text>name</Text>
            
               <View>
               <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}}
                  style={{width: 100, height: 100}} />
                  
               </View>
      
               <View style = {{flexDirection:'column',alignItems:'center'}}>
                  
                  <View style = {{marginRight:120}}>
      
                     <TeamBox>
      
                     </TeamBox>
      
                  </View>
                  
            
                  <View style = {{marginTop:-60,flexDirection:'row'}}>
      
                     <CoachProfileButtons>
      
                     </CoachProfileButtons>
      
                  </View>
      
               </View>
            
      
               <View style = {{marginTop:-100}}>
      
                  <NotificationsBox>
      
                  </NotificationsBox>
      
               </View>
               
                     
               <View style = {{marginTop:-530,flexDirection:'row'}}>
      
                  <MenuPush>
      
                  </MenuPush>
                  
               </View>
         
         </View>
         </>

      );
      
}
