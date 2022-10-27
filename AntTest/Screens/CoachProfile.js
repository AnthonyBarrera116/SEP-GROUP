// Imports React form react
import React from "react";

// Imports View, Text and Image
import { Text,View, Image}    from "react-native";

// Imports Team Box, Notfications and Coach Buttons to Coach Profile Screen
import CoachProfileButtons from '../ProfileButtons/CoachProfileButtons';
import NotificationsBox from '../Boxes/NotificationsBox';
import TeamBox from '../Boxes/TeamBox';


// Coach Profile Organized function
export default function CoachProfile(){

   // returns organized buttons andstyle for coach Profile
   return (<>   
      <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
               
         <Text>
            
            name

         </Text>
            
         <View>

            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
                  
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

         </View>
         
               
      </View>
        
   </>);
      
}
