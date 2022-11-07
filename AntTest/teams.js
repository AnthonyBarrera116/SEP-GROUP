
 teams =["A","B"]

 // import text,text input, touuchable and view
 import { Text, TextInput, TouchableOpacity, View } from "react-native";
 
 // import MainStyle
 
 allTeams = []
 
 const axios = require('axios');
 
 
 export function GetTeams(){
 
    return allTeams
 
 }
 
 export default function Teams() {
 
    function mapTeams(t){
 
       for (ar of t){
 
          teamName = 
          {
             team: ar
          };
 
    
           allTeams.push(teamName)
    
       }
    
    
    }
 
 
 
    return(
 
      mapTeams(teams)
 
    )
 
 }