import React from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import FormStyle from "./ButtonProfileStyle";


//import Profile from "./Profile.js";

export default function CoachProfileButtons(){

 function LeaveTeam(){
     
    // Alert if Leave Team  is pressed
    alert("Leave Team Clicked");

      
  }

  function DeleteAccount(){

    // Alert if Delete Account is pressed
    alert("Delete Account");

    
  }

  function DeleteTeam(){

    
    // Alert if Delete Team is pressed
    alert("Delete Team");

    
  }



  function RequestPlayer(){
    
    // Alert if Request Player is pressed
    alert("Request Player");
     
    

  }

  
  // Returns style and organized buttons for Coach Profile
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
        
        <TouchableOpacity style={FormStyle.formButton} onPress={() => DeleteTeam() }>
          
          <Text style={FormStyle.formButtonText}>Delete Team</Text>

        </TouchableOpacity>
      </View>

    </View>

    <View style = {{marginTop:120,flex:1,flexDirection:'row',right:103}}>

      <View style={FormStyle.button}>

      </View>
        
      <View style={{flex:2}}>
        
        <TouchableOpacity style={FormStyle.formButton} onPress={() => RequestPlayer() }>
        
          <Text style={FormStyle.formButtonText}>Request Player</Text>
        
        </TouchableOpacity>
      
      </View>

      <View style={FormStyle.button}>
      
      </View>
          
      <View style={{flex:2,left: 60}}>
      
        <TouchableOpacity style={FormStyle.formButton} onPress={() => DeleteAccount() }>
      
          <Text style={FormStyle.formButtonText}>Delete Account</Text>
      
        </TouchableOpacity>
      
      </View>

    </View>

  </>);

}

