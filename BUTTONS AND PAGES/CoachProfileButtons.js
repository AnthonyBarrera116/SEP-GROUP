import React from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import FormStyle from "./ButtonProfileStyle";
import TeamBox from './TeamBox';

//import Profile from "./Profile.js";

export default function CoachProfileButtons(){

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");


 function LeaveTeam(){// inner function
      //const obj = {login:em,password:pass};
      //console.log = {login: em, password: pass}
      alert("Leave Team Clicked");

      
  }

  function DeleteAccount(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Delete Account");

    
  }

  function DeleteTeam(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Delete Team");

    
  }



  function RequestPlayer(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");

     
    alert("Request Player");
     
    

  }

  

  return (<>   

    <View>
  
        <TeamBox>

        </TeamBox>

    </View>


    <View style = {{marginTop:30,flex:1,flexDirection:'row',left:10}}>
        
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
            onPress={() => DeleteTeam() }>
        <Text style={FormStyle.formButtonText}>Delete Team</Text>
        </TouchableOpacity>
        </View>

    </View>

    <View style = {{marginTop:120,flex:1,flexDirection:'row',right:130}}>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
                onPress={() => RequestPlayer() }>
        <Text style={FormStyle.formButtonText}>Request Player</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2,left: 60}}>
        <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => DeleteAccount() }>
        <Text style={FormStyle.formButtonText}>Delete Account</Text>
        </TouchableOpacity>
        </View>

    </View>

   
    </>

  );

  
  

}

