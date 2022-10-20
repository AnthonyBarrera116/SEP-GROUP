import React from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import FormStyle from "./ButtonStyle.js";

//import Profile from "./Profile.js";

export default function MenuButtons(){

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");


 function handleSubmitScores(){// inner function
      //const obj = {login:em,password:pass};
      //console.log = {login: em, password: pass}
      alert("Scores Clicked");

      
  }

  function handleSubmitCalander(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Calander Clicked");

    
  }

  function handleSubmitStandings(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");
    alert("Standings Clicked");

    
  }



  function handleSubmitProfile(){// inner function
    //const obj = {login:em,password:pass};
    //console.log = {login: em, password: pass}
    //alert("Profile Clicked");

     
    alert("Profile Clicked");
     
    

  }

  

  return (<>   

    <View style = {{marginTop:575,flex:1,flexDirection:'row'}}>
      
       <View style={FormStyle.button}>
       </View>
        
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => handleSubmitScores() }>
        <Text style={FormStyle.formButtonText}>Scores</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
        
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
          onPress={() => handleSubmitCalander() }>
        <Text style={FormStyle.formButtonText}>Calander</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
            
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => handleSubmitStandings() }>
            <Text style={FormStyle.formButtonText}>Standings</Text>
        </TouchableOpacity>
        </View>

        <View style={FormStyle.button}>
        </View>
            
        <View style={{flex:2}}>
        <TouchableOpacity style={FormStyle.formButton}             
          onPress={() => handleSubmitProfile() }>
        <Text style={FormStyle.formButtonText}>Profile</Text>
        </TouchableOpacity>
        </View>

    </View>
   
    </>

  );

  
  

}

