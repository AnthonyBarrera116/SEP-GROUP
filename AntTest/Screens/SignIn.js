// Imports React
import React, { useEffect } from "react";

// Import Features from React-Native
import { Text, TextInput, TouchableOpacity, View,useState} from "react-native";

// Import Style of Where eveything goes
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";
import { response } from "express";

const axios = require('axios');

// Testing of logging in 
const e = 'Aj';
const pass ='1234';

// Function For Logging In
export default function SignIn({navigation}){

  // Const Variable for email
  const [userName, setName] = React.useState("");

  // Const variable for Password
  const [password, setPassword] = React.useState("");

  
  const [userGet, setUser] =  React.useState([]);
    // Function for handling checking user and password 
    function handleSubmit(pUser, pPwd){

      

      const user = 
      {
  
          username: pUser,
          password: pPwd,
  
  
      }
          axios.post("http://localhost:4000/dologin",user)
          .then((response) =>  
            //console.log(JSON.stringify( response.data)),
            setUser(response.data)
          )
          .catch((error) => 
          {
              console.log(error);
          });
       
          console.log(userGet["TeamID"])

      // If email is correct
      if(userGet !== null){

          // If coach
          if( userGet["UseType"] === 1){
              
            // Navigate Profile style (DOESN'T WORK)
            navigation.navigate('CoachProfile') 

          }

          // If they are on a Team
          else if( userGet["TeamID"] !== "unassigned"){

            // Navigate Profile style with team (DOESN'T WORK)
            navigation.navigate('ProfileWithTeam') 

          }

          // Else standard Profile with no team
          else{

              
            // Navigate Profile style without team (DOESN'T WORK)
            navigation.navigate('ProfileWithoutTeam') 

          }

      
        // Incorrect Password
      }

      // Incorrect Email
      else{

        // Alert for wrong Password
        alert('INCORRECT EMAIL/PASSWORD')

      }
    
    }

    // Buttons and style returned for Sign In
    return (<>
      
      <View>

        <View style={FormStyle.groupView}>
            
            <Text style={MainStyle.emphasisText}> Login </Text>

        </View>

        <View style={FormStyle.groupView}>

          <Text style={FormStyle.label}>Email:</Text>
            
          <TextInput onChangeText={setName} style={FormStyle.input} autoCapitalize={false} />

          <Text style={FormStyle.label}>Password:</Text>

          <TextInput onChangeText={setPassword} style={FormStyle.input} secureTextEntry={true} />

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleSubmit(userName,password)}>

          <Text style={FormStyle.formButtonText}> Submit </Text>

          </TouchableOpacity>

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> navigation.navigate('CreateAccount', url="http://localhost:4000/user" )}>

          <Text style={FormStyle.formButtonText}> Create Account </Text>

          </TouchableOpacity>

        </View>
        
      </View>

    </>);
}