// Imports React
import React from "react";

// Import Features from React-Native
import { Text, TextInput, TouchableOpacity, View } from "react-native";


// Imports Creat Stack Navigator for Navigation
import { Navigation} from '@react-navigation/native-stack';

// Import Style of Where eveything goes
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";

// Testing of logging in 

// Function For Logging In
export default function CreateAccount({navigation}){

  // Const Variable for email
  const [email, setEmail] = React.useState("");

  // Const variable for Password
  const [password, setPassword] = React.useState("");


   function handleSubmit(pEmail, pPwd){

        alert('Account Created')
        
        navigation.pop();


    }

    // Buttons and style returned for Sign In
    return (<>
      
      <View>

        <View style={FormStyle.groupView}>
            
            <Text style={MainStyle.emphasisText}> Create Account </Text>

        </View>

        <View style={FormStyle.groupView}>

          <Text style={FormStyle.label}>Email:</Text>
            
          <TextInput onChangeText={setEmail} style={FormStyle.input} autoCapitalize={false} />

          <Text style={FormStyle.label}>Password:</Text>

          <TextInput onChangeText={setPassword} style={FormStyle.input} secureTextEntry={true} />

          <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleSubmit(email,password)}>

          <Text style={FormStyle.formButtonText}> Submit </Text>

          </TouchableOpacity>

        </View>
        
      </View>

    </>);
}