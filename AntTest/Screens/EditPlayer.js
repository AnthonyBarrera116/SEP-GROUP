import React from "react";

import { ScrollView, Text, View,StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { useState ,useEffect} from 'react';
// Import Style of Where eveything goes

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyleEdit";

const styles = StyleSheet.create({

  welcome: {
     
      height: 1000,
      color: 'white',
      backgroundColor: '#20232a',
      textAlign: "center"
  },

  topBar:{

      width: 500 * 2,
      height: 50,
      fontSize: 40,
      textAlign: 'center',
      color: 'white',
      backgroundColor: '#20232a',
      flexDirection:'row'
      

  },
  
  team:{
      fontSize: 20,
      margin:5,
      
      color: 'white',

  },
  games:{
     color: 'white',
     fontSize: 20,
     textAlign:'right',
     marginTop:-30,

 },
  
  
});



export default function EditPlayer({navigation}){

  [uName, setNameInput] = React.useState("");
  [userTy, setTypeInput] = React.useState("");
  [teamIn, setTeamInput] = React.useState("");
  [idIn, setIdInput] = React.useState("");

  [user,setUser] = React.useState([]);
   
  // axios import
  const axios = require('axios');


  function handleSubmit(){

    userd = {

      username: uName,

    }
    console.log(userd.username)

    axios.post("http://localhost:4000/getuser",userd)
        
    .then((response) =>  
      
      // sets UserGet to info response
      setUser(response.data)
    )

    // For error
    .catch((error) => 
    {
      console.log(error);
    });
    
    console.log(user)
    setTimeout(() => { 
    if(uName === ""){

      uName = user.UserName

    }

    if(userTy === ""){


      userTy = user.UserType

    }

    if(teamIn === ""){

      teamIn =  user.TeamID

    }

    if(idIn === ""){

      idIn = user._id

    }


    profile = {

      _id: idIn,
      UserName:uName,
      TeamID:teamIn,
      UserType: userTy,

    }

      
    axios.post("http://localhost:4000/updateUser", profile)
        .then((response) => console.log( JSON.stringify( response.data ) ))
        .catch((error) => 
        {
            console.log(error);
        });

      alert( JSON.stringify(profile) );


    }, 500);

  }

  [players,setPlayers] = React.useState([]);

    playersList = []
    
      // use a POST request with Axios. we're posting the user's information to the server
      useEffect(() => {
        axios.get("http://localhost:4000/allUsers")
            
          .then((response) =>  
            
            // sets UserGet to info response
            setPlayers(response.data)
          )
    
          // For error
          .catch((error) => 
          {
            console.log(error);
          });
      },[])

    
      return(<>

        <ScrollView style = {{marginVertical:30,marginBottom:-40,marginTop:5}}>
              
          <View style={styles.welcome}>
            {players.map((a,b)=>{

            return <View>
                                                  
              <Text style={styles.team}>
                
                _ID: {JSON.stringify(a._id)}
                {"\n"}
                UserName: {JSON.stringify(a.UserName)}
                {"\n"}
                UserType: {JSON.stringify(a.UserType)}
                {"\n"}
                Team: {JSON.stringify(a.TeamID)}
              </Text>

          
            </View>
                
          })}

                  
            </View>
          </ScrollView>

          
          <View style = {{marginBottom:10}}>

            <View style={FormStyle.groupView}>

              <Text style={FormStyle.label}>UserName:</Text>
                
              <TextInput onChangeText={setNameInput} style={FormStyle.input} autoCapitalize={false} />

              <Text style={FormStyle.label}>NEWUserName:</Text>
                
                <TextInput onChangeText={setNameInput} style={FormStyle.input} autoCapitalize={false} />

              <Text style={FormStyle.label}>UserType:</Text>

              <TextInput onChangeText={setTypeInput} style={FormStyle.input} secureTextEntry={false} />
              
              <Text style={FormStyle.label}>Team:</Text>

              <TextInput onChangeText={setTeamInput} style={FormStyle.input} secureTextEntry={false} />

              <Text style={FormStyle.label}>_id:</Text>

              <TextInput onChangeText={setIdInput} style={FormStyle.input} secureTextEntry={false} />


              <TouchableOpacity style={FormStyle.formButton} onPress={()=> handleSubmit()}>

              <Text style={FormStyle.formButtonText}> Submit </Text>

              </TouchableOpacity>


            </View>

          </View>
          

    </>)
}