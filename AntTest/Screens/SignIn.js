// Imports React
import React, { useRef } from "react";

// Import Features from React-Native
import { Text, TextInput, TouchableOpacity, View,useState} from "react-native";

// Import Style of Where eveything goes
import MainStyle from "../Styles/MainStyle.style"

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
        UserName: pUser,
        Password: pPwd,
  
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

      // give time to request info
      setTimeout(() => { 

        // if user info isn't null
        if(userGet !== null){

          // Coach Page
          if( userGet.UserType === 1){
            alert("Sign In Sucessful")
            setUser(null)
            navigation.navigate('CoachProfile')

          }

          // Admin page
          else if( userGet.UserType === 2){
            alert("Sign In Sucessful")
            setUser(null)
            navigation.navigate('Admin')

          }

          // If they are on a Team
          else if( userGet.TeamID !== "unassigned"){
            alert("Sign In Sucessful")
            setUser(null)
           navigation.navigate('ProfileWithTeam')
          }

          // Else standard Profile with no team
          else{
            alert("Sign In Sucessful")
            setUser(null)
            navigation.navigate('ProfileWithoutTeam')

          }

      }

      else{
        setUser(null)
        // Alert for wrong Password/Username
        alert('INCORRECT USERNAME/PASSWORD')
        
      }
      }, 750);

      setUser(null)
    
    }
    // Buttons and style returned for Sign In
    return (<>
      
      <View>

        <View style={FormStyle.groupView}>
            
            <Text style={MainStyle.emphasisText}> Login </Text>

        </View>

        <View style={FormStyle.groupView}>

          <Text style={FormStyle.label}>UserName:</Text>
            
          <TextInput value={userName} onChangeText={userName => setName(userName)} onfocus="this.value=''" style={FormStyle.input} autoCapitalize={false}/>

          <Text style={FormStyle.label}>Password:</Text>

          <TextInput  value={password} onChangeText={password => setPassword(password)} onfocus="this.value=''" style={FormStyle.input} secureTextEntry={true} />

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> {handleSubmit(userName,password);setPassword('');setName('')}}> 


          <Text style={FormStyle.formButtonText}> Submit </Text>

          </TouchableOpacity>

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> {navigation.navigate('CreateAccount')}}>


          <Text style={FormStyle.formButtonText}> Create Account </Text>

          </TouchableOpacity>

        </View>
        
      </View>

    </>);
}