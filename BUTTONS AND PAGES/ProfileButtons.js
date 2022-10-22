import React from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import FormStyle from "./ButtonProfileStyle";


//import Profile from "./Profile.js";

export default function ProfileButtons(){

 function LeaveTeam(){// inner function
      //const obj = {login:em,password:pass};
      //console.log = {login: em, password: pass}
      alert("LeaveTeam Clicked");

      
  }

  function RequestTeam(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Request Team Clicked");

    
  }

  function RequestToCoach(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Request To Coach Clicked");

    
  }



  function Delete(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");

     
    alert("Delete Clicked");
     
    

  }

  

  return (<>   

    <View style = {{marginTop:30,flex:1,flexDirection:'row',left:103}}>
        
        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2,}}>
        <TouchableOpacity style={FormStyle.formButton}             
                onPress={() => LeaveTeam() }>
        <Text style={FormStyle.formButtonText}>Leave Team</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2,left: 60}}>
        <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => RequestTeam(email,pwd) }>
        <Text style={FormStyle.formButtonText}>Request To Team</Text>
        </TouchableOpacity>
        </View>

    </View>

    <View style = {{marginTop:120,flex:1,flexDirection:'row',right:103}}>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
                onPress={() => RequestToCoach() }>
        <Text style={FormStyle.formButtonText}>Request To Coach</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2,left: 60}}>
        <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => Delete() }>
        <Text style={FormStyle.formButtonText}>Delete Account</Text>
        </TouchableOpacity>
        </View>

    </View>

   
    </>

  );

  
  

}

