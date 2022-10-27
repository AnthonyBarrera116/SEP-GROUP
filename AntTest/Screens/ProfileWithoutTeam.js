// Imports react from react
import {React} from "react";

// Imports view an dimage from react-native
import { Text,View, Image}  from "react-native";

// imports profile buttons, menu buttons and notfications boc
import ProfileButtons from '../ProfileButtons/ProfileButtons';
import NotificationsBox from '../Boxes/NotificationsBox';


//Profile without team function
export default function ProfileWithoutTeam(){

   // Returns profile without team screen
   return (<>   

      <View style = {{marginTop:20,alignItems: 'center',flex:1}}>

         <Text>
            
            name

         </Text>
            
         <View>

            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
                  
         </View>
               
         <View style = {{marginTop:-20,flexDirection:'row'}}>

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

