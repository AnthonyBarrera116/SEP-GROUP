import React from "react";

import { ScrollView, Text, View,StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { useState ,useEffect} from 'react';
// Import Style of Where eveything goes

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyleEdit";
import { response } from "express";

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

  const axios = require('axios');



  [players,setPlayers] = React.useState([]);

      // use a POST request with Axios. we're posting the user's information to the server
      
    console.log("FIUYGASDFUIYGADSYIFGIYSDGFYIK")
    useEffect(() => {
        axios.get("http://localhost:4000/getallreq")
            
          .then((response) =>  
            
            // sets UserGet to info response
            console.log(response.data)
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

          
    </>)
}