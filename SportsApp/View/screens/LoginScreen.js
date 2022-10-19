import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import MainStyle from "../MainStyle.style";
import FormStyle from "../Form.style";
import { UserController } from "../../Controllers/UserController"

export default function LoginScreen(){
    const [username, setUsername] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleSubmit(pUsername, pEmail, pPwd){
        const user = {username: pUsername, login: pEmail, password: pPwd};
        let userCon = new UserController();
        userCon.saveUser(user);
        // put function from Controller in here
        alert( JSON.stringify(user) );
    }

    return (<>
        <View 
            style={FormStyle.groupView}>
        
            <Text 
                style={MainStyle.emphasisText}>
                    Register for Account
                </Text>
            
        </View>
        
        <View style={FormStyle.groupView}>
        
            <Text style={FormStyle.label}>
                Username:
            </Text>
            
            <TextInput 
                onChangeText={setUsername} 
                style={FormStyle.input} 
                autoCapitalize={false} />
        
            <Text style={FormStyle.label}>
                Email:
            </Text>
            
            <TextInput 
                onChangeText={setEmail} 
                style={FormStyle.input} 
                autoCapitalize={false} />

            <Text style={FormStyle.label}>
                Password:
            </Text>
            
            <TextInput 
                onChangeText={setPassword} 
                style={FormStyle.input} 
                secureTextEntry={true} />

            <TouchableOpacity
                style={FormStyle.formButton}
                onPress={()=> handleSubmit(username, email,password)}>
                
                <Text style={FormStyle.formButtonText}>
                    Submit
                </Text>
                
            </TouchableOpacity>
            
        </View>
        </>
    );
}