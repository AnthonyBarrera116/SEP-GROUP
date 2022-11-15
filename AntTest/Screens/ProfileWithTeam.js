// Imports React form React
import {React} from "react";

// Imports Text, View and image from recat-native
import { Text,View, Image,TouchableOpacity}  from "react-native";

// IMports Profile Buttons, notifications box and team box
import FormStyle from "../Styles/ButtonProfileStyle";
import NotificationsBox from '../Boxes/NotificationsBox';
import TeamBox from "../Boxes/TeamBox";


// Profile with team screen function
export default function ProfileWithTeam({navigation}){

   function LeaveTeam(){

      // alert Leave Team button is clicked
      alert("LeaveTeam Clicked");
  
   }
  
    // Request team function
   function RequestTeam(){
  
      // alert Request Team button is clicked
      navigation.navigate('RequestTeam')
  
      
   }
  
    // Request to coach function 
   function RequestToCoach(){
  
      // alert Request To Coach button is clicked
      navigation.navigate('RequatCoach')
  
      
   }
  
  
    // Delete account function
   function Delete(){
  
      // alert Delete Account button is clicked
      navigation.navigate('DeleteAccount')
       
      
  
   }

   // returns organized profile function sheet
  
return (<>   

   <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
      { /*Name user*/}
      <Text>
         
         name

      </Text>
         
      <View>
         {/*Profile image*/}
         <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
               
      </View>

      {/*Team Box*/}
      <View style = {{marginRight:120}}>

            <TeamBox>

            </TeamBox>

      </View>
                  
      {/*Top Buttons*/}      
      <View style = {{marginTop:-65,flexDirection:'row'}}>

         <View style = {{marginTop:30,flex:1,flexDirection:'row',left:103}}>
         
         <View style={FormStyle.button}>
         
         </View>
         
         {/*Leave Team*/}
         <View style={{flex:2,}}>
            
            <TouchableOpacity style={FormStyle.formButton} onPress={() => LeaveTeam() }>
            
               <Text style={FormStyle.formButtonText}>Leave Team</Text>
            
            </TouchableOpacity>
         </View>
   
         <View style={FormStyle.button}>
         </View>
            
            {/*Request To Team*/}
            <View style={{flex:2,left: 60}}>
               <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestTeam() }>
                  <Text style={FormStyle.formButtonText}>Request To Team</Text>
               </TouchableOpacity>
            </View>
   
         </View>
   
         {/*Bottom Buttons*/}
         <View style = {{marginTop:120,flex:1,flexDirection:'row',right:103}}>
   
            <View style={FormStyle.button}>
            </View>
            
            {/*Request to coach*/}
            <View style={{flex:2}}>
               <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestToCoach() }>
      
                  <Text style={FormStyle.formButtonText}>Request To Coach</Text>
      
               </TouchableOpacity>
      
            </View>
      
            <View style={FormStyle.button}>
      
            </View>
            
            {/*Delete Team*/}
            <View style={{flex:2,left: 60}}>
      
               <TouchableOpacity style={FormStyle.formButton} onPress={() => Delete() }>
      
                  <Text style={FormStyle.formButtonText}>Delete Account</Text>
      
               </TouchableOpacity>
            </View>
   
         </View>

      </View>
      
      <TouchableOpacity style={FormStyle.formButton} onPress={() => DeleteAccount() }>
                     
                     <Text style={FormStyle.formButtonText}>Sign Out</Text>
                  
      </TouchableOpacity>
               
            
      {/*Notifications box*/}
      <View style = {{marginTop:-100}}>

         <NotificationsBox>

         </NotificationsBox>

      </View>
               
                    
      
   </View>
      
</>);
   
}     

