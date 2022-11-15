
//import react 
import React from "react";

// import text,text input, touuchable and view
import { Text, TextInput, TouchableOpacity, View } from "react-native";

// import MainStyle
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";

// axios import
const axios = require('axios');

//const passwordUtil = require('../../Util/PasswordUtil');

export default function LoginScreen({navigation}){

    // Const for name and password
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    
    const [email, setEm] = React.useState("");

    // URL for MoongoDB
    const url="http://localhost:4000/user"

    // parameters include the username, password, and url from properties
    function handleSubmit(pUsername, pPwd,em){
        // TODO replace Team ID properly when framework is set up
        let placeholderTeamID = "unassigned";
        //let hashedPw = passwordUtil.hashPassword( pPwd );
        const user = 
        {
            UserName: pUsername, 
            Email: em,
            Password: pPwd, 
            TeamID:placeholderTeamID
        };
        // log the URL just to be sure we're connecting to the right port
        //console.log(url);
        
        // use a POST request with Axios. we're posting the user's information to the server
        axios.post(url, user)
        .then((response) => console.log( "Account Created"))//JSON.stringify( response.data )
        .catch((error) => 
        {
            console.log(error);
        });
        
        // simply print the user's information
        // indicates that we can retrieve user info from the DB to the app
        //alert( JSON.stringify(user) );
        alert( "Account Created" );
        navigation.pop();
        // TODO - change navigation from page based on User Status (coach, admin, normal player)
    }

    return (<>
        {/*Title for the page*/}
        <View
            style={FormStyle.groupView}>
        
            <Text 
                style={MainStyle.emphasisText}>
                    Register for Account
                </Text>
            
        </View>
        
        {/*Input fields*/}
        <View 
            style={FormStyle.groupView}>
        
            {/*Text for the username label*/}
            <Text style={FormStyle.label}>
                Username:
            </Text>
            {/*Username input field*/}
            <TextInput 
                onChangeText={setUsername} 
                style={FormStyle.input} 
                autoCapitalize={false} />

            <Text style={FormStyle.label}>
                Email:
            </Text>
            {/*Username input field*/}
            <TextInput 
                onChangeText={setEm} 
                style={FormStyle.input} 
                autoCapitalize={false} />

            {/*Text for the password label*/}
            <Text style={FormStyle.label}>
                Password:
            </Text>
            {/*Password input field*/}
            <TextInput 
                onChangeText={setPassword} 
                style={FormStyle.input} 
                secureTextEntry={true} />

            {/*'Submit' button
            calls the 'handleSubmit()' function, which sends
            data entered on this screen to the UserController
            
            the URL is sent as one of the properties for this screen*/}
            <TouchableOpacity
                style={FormStyle.formButton}
                onPress={()=> handleSubmit(username, password,email)}>
                {/*Text for the 'Submit' button*/}
                <Text style={FormStyle.formButtonText}>
                    Submit
                </Text>
                
            </TouchableOpacity>
            
        </View>
        </>
    );
}