// Imports React form react
import React from "react";

// Imports View, Text and Image
import { Text,View, Image,TouchableOpacity}    from "react-native";

// Imports Team Box, Notfications and Coach Buttons to Coach Profile Screen
import NotificationsBox from '../Boxes/NotificationsBox';
import TeamBox from '../Boxes/TeamBox';

import FormStyle from "../Styles/ButtonProfileStyle";



// Coach Profile Organized function
export default function CoachProfile({navigation}){

   function LeaveTeam(){
     
      // Alert if Leave Team  is pressed
      alert("LeaveTeam");
  
        
    }
  
    function DeleteAccount(){
  
      // Alert if Delete Account is pressed
      navigation.navigate('DeleteAccount')
      
  
      
    }
  
    function DeleteTeam(){
  
      
      // Alert if Delete Team is pressed
      
      navigation.navigate('DeleteTeam') 
  
      
    }
  
  
  
    function RequestPlayer(){
      
      // Alert if Request Player is pressed
      navigation.navigate('TeamRequestoPlayer') 
       
      
  
    }

   // returns organized buttons andstyle for coach Profile
   return (<>   
      <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
         
         {/*Name user*/}
         <Text>
            
            name

         </Text>
            
         <View>

            {/*Profile image*/}
            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
                  
         </View>
      
         {/*Team Box*/}
         <View style = {{flexDirection:'column',alignItems:'center'}}>
                  
            <View style = {{marginRight:120}}>
      
               <TeamBox>
      
               </TeamBox>
                     
            </View>
                  
            
            <View style = {{marginTop:-60,flexDirection:'row'}}>
      
               {/*Top Buttons*/}
               <View style = {{marginTop:30,flex:1,flexDirection:'row',left:103}}>
        
                  <View style={FormStyle.button}>
                  
                  </View>

                  <View style={{flex:2,}}>

                  
                  {/*Leave Team Button*/}
                  <TouchableOpacity style={FormStyle.formButton} onPress={() => LeaveTeam() }>
                     
                     <Text style={FormStyle.formButtonText}>Leave Team</Text>
                  
                  </TouchableOpacity>
                  
                  </View>

                  <View style={FormStyle.button}>
                  
                  </View>
                  

                  {/*Delete Team Button*/}
                  <View style={{flex:2,left: 60}}>
                  
                     <TouchableOpacity style={FormStyle.formButton} onPress={() => DeleteTeam() }>
                        
                        <Text style={FormStyle.formButtonText}>Delete Team</Text>

                     </TouchableOpacity>
                  </View>

               </View>

               {/*Bottom Buttons*/}
               <View style = {{marginTop:120,flex:1,flexDirection:'row',right:103}}>

                  <View style={FormStyle.button}>

                  </View>
                  
                  <View style={{flex:2}}>

                  {/*Request Player Button*/}
                  <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestPlayer() }>
                  
                     <Text style={FormStyle.formButtonText}>Request Player</Text>
                  
                  </TouchableOpacity>
                  
                  </View>

                  <View style={FormStyle.button}>
                  
                  </View>
                  
                  {/*Delete Account Button*/}
                  <View style={{flex:2,left: 60}}>
                  
                     <TouchableOpacity style={FormStyle.formButton} onPress={() => DeleteAccount() }>
                     
                        <Text style={FormStyle.formButtonText}>Delete Account</Text>
                     
                     </TouchableOpacity>
                  
                  </View>

               </View>
      
            </View>
      
         </View>
            
      
         {/*Notfications box*/}
         <View style = {{marginTop:-100}}>
      
            <NotificationsBox>
      
            </NotificationsBox>
      
         </View>

         
               
      </View>
        
   </>);
      
}
