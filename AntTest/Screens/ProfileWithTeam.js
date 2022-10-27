// Imports React form React
import {React} from "react";

// Imports Text, View and image from recat-native
import { Text,View, Image}  from "react-native";

// IMports Profile Buttons, notifications box and team box
import ProfileButtons from '../ProfileButtons/ProfileButtons';
import NotificationsBox from '../Boxes/NotificationsBox';
import TeamBox from "../Boxes/TeamBox";


// Profile with team screen function
export default function ProfileWithTeam(){

   // returns organized profile function sheet
  
return (<>   

   <View style = {{marginTop:20,alignItems: 'center',flex:1}}>

      <Text>
         
         name

      </Text>
         
      <View>

         <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
               
      </View>

      <View style = {{marginRight:120}}>

            <TeamBox>

            </TeamBox>

      </View>
                  
            
      <View style = {{marginTop:-65,flexDirection:'row'}}>

         <ProfileButtons>

         </ProfileButtons>

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

