// Imports React
import React, { useEffect } from "react";

// Import Features from React-Native
import { Text, TextInput, TouchableOpacity, View,useState} from "react-native";

// Import Style of Where eveything goes
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";


// Axios
const axios = require('axios');

// Function For Logging In
export default function SignIn({navigation}){

  // Const Variable for email
  const [userName, setName] = React.useState("");

  // Const variable for Password
  const [password, setPassword] = React.useState("");

  // Sets user info got from response to variable
  [userGet, setUser] =  React.useState([]);
    // Function for handling checking user and password 
  

    function handleSubmit(pUser, pPwd){

      // User setting up from request
      user = 
      {
          username: pUser,
          password: pPwd,
  
      }

      // User login URL
      axios.post("http://localhost:4000/dologin",user)
        
      .then((response) =>  
        
        // sets UserGet to info response
        setUser(response.data)
      )

      // For error
      .catch((error) => 
      {
        console.log(error);
      });

      console.log(userGet)

      // give time to request info
      setTimeout(() => { 

        // if user info isn't null
        if(userGet !== null){

          // Coach Page
          if( userGet.UserType === 1){

            navigation.navigate('CoachProfile')

          }

          // Admin page
          else if( userGet.UserType === 2){
            
            navigation.navigate('Admin')

          }

          // If they are on a Team
          else if( userGet.TeamID !== "unassigned"){

           navigation.navigate('ProfileWithTeam')
          }

          // Else standard Profile with no team
          else{

            navigation.navigate('ProfileWithoutTeam')

          }

      }

      else{

        // Alert for wrong Password/Username
        alert('INCORRECT USERNAME/PASSWORD')
        
      }



      }, 750);

    
    }

    // Buttons and style returned for Sign In
    return (<>
      
      <View>

        <View style={FormStyle.groupView}>
            
            <Text style={MainStyle.emphasisText}> Login </Text>

        </View>

        <View style={FormStyle.groupView}>

          <Text style={FormStyle.label}>UserName:</Text>
            
          <TextInput onChangeText={setName} style={FormStyle.input} autoCapitalize={false} />

          <Text style={FormStyle.label}>Password:</Text>

          <TextInput onChangeText={setPassword} style={FormStyle.input} secureTextEntry={true} />

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleSubmit(userName,password)}>

          <Text style={FormStyle.formButtonText}> Submit </Text>

          </TouchableOpacity>

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> navigation.navigate('CreateAccount' )}>

          <Text style={FormStyle.formButtonText}> Create Account </Text>

          </TouchableOpacity>

        </View>
        
      </View>

    </>);
}