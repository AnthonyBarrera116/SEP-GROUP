import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import MainStyle from "../MainStyle.style";
import FormStyle from "../Form.style";

const axios = require('axios');


export default function LoginScreen(props){
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(pUsername, pPwd, url){
        // TODO replace Team ID properly when framework is set up
        let placeholderTeamID = "unassigned";
        const user = {username: pUsername, password: pPwd, teamID:placeholderTeamID};
        console.log(url);
        axios.post(url, user)
        .then((response) => console.log( JSON.stringify( response.data ) ))
        .catch((error) => 
        {
            console.log(error);
        });
        
        
        alert( JSON.stringify(user) );
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
            data entered on this screen to the UserController*/}
            <TouchableOpacity
                style={FormStyle.formButton}
                onPress={()=> handleSubmit(username, password, props.url)}>
                {/*Text for the 'Submit' button*/}
                <Text style={FormStyle.formButtonText}>
                    Submit
                </Text>
                
            </TouchableOpacity>
            
        </View>
        </>
    );
}