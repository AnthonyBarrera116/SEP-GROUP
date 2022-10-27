// Imports React
import React from "react";

// Import Features from React-Native
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// Import Style of Where eveything goes
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";

// Testing of logging in 
const e = 'Aj';
const pass ='1234';
const co = 0;
const team = 1;

// Function For Logging In
export default function LoginScreen({navigation}){

  // Const Variable for email
  const [email, setEmail] = React.useState("");

  // Const variable for Password
  const [password, setPassword] = React.useState("");

    // Function for handling checking user and password 
    function handleSubmit(pEmail, pPwd){
      
      // If email is correct
      if(e === pEmail){

        // If Password is correct
        if(pass === pPwd){

          // If coach
          if(co === 1){
              
            // Navigate Profile style (DOESN'T WORK)
            navigation.navigate('CoachProfile') 

          }

          // If they are on a Team
          else if(team === 1){

            // Navigate Profile style with team (DOESN'T WORK)
            navigation.navigate('ProfileWithTeam') 

          }

          // Else standard Profile with no team
          else{

              
            // Navigate Profile style without team (DOESN'T WORK)
            navigation.navigate('ProfileWithoutTeam') 

          }

        }
        
        // Incorrect Password
        else{

          // Alert for wrong Password
          alert('INCORRECT PASSWORD')

        }

      }

      // Incorrect Email
      else{

        // Alert for wrong Password
        alert('INCORRECT EMAIL')

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
            
          <TextInput onChangeText={setEmail} style={FormStyle.input} autoCapitalize={false} />

          <Text style={FormStyle.label}>Password:</Text>

          <TextInput onChangeText={setPassword} style={FormStyle.input} secureTextEntry={true} />

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleSubmit(email,password)}>

          <Text style={FormStyle.formButtonText}> Submit </Text>

          </TouchableOpacity>

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> navigation.navigate('CreateAccount')}>

          <Text style={FormStyle.formButtonText}> Create Account </Text>

          </TouchableOpacity>

        </View>
        
      </View>

    </>);
}