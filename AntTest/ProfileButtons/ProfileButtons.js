import React from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import FormStyle from "../Styles/ButtonProfileStyle";


//import Profile from "./Profile.js";

export default function ProfileButtons(){

  // Leave team function
 function LeaveTeam(){

    // alert Leave Team button is clicked
    alert("LeaveTeam Clicked");

  }

  // Request team function
  function RequestTeam(){

    // alert Request Team button is clicked
    alert("Request Team Clicked");

    
  }

  // Request to coach function 
  function RequestToCoach(){

    // alert Request To Coach button is clicked
    alert("Request To Coach Clicked");

    
  }


  // Delete account function
  function Delete(){

    // alert Delete Account button is clicked
    alert("Delete Clicked");
     
    

  }

  // Returns Buttons and style for Profile Screen
  return (<>   

    <View style = {{marginTop:30,flex:1,flexDirection:'row',left:103}}>
        
      <View style={FormStyle.button}>
      
      </View>
        
      <View style={{flex:2,}}>
        
        <TouchableOpacity style={FormStyle.formButton} onPress={() => LeaveTeam() }>
        
          <Text style={FormStyle.formButtonText}>Leave Team</Text>
        
        </TouchableOpacity>
      </View>

      <View style={FormStyle.button}>
      </View>
        
        <View style={{flex:2,left: 60}}>
          <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestTeam(email,pwd) }>
            <Text style={FormStyle.formButtonText}>Request To Team</Text>
          </TouchableOpacity>
        </View>

    </View>

    <View style = {{marginTop:120,flex:1,flexDirection:'row',right:103}}>

      <View style={FormStyle.button}>
      </View>
        
      <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestToCoach() }>

          <Text style={FormStyle.formButtonText}>Request To Coach</Text>

        </TouchableOpacity>

      </View>

      <View style={FormStyle.button}>

      </View>
        
      <View style={{flex:2,left: 60}}>

        <TouchableOpacity style={FormStyle.formButton} onPress={() => Delete() }>

          <Text style={FormStyle.formButtonText}>Delete Account</Text>

        </TouchableOpacity>
      </View>

    </View>

  </>);

}

