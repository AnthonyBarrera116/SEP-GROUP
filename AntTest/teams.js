
 teams =["A","B"]

 // import text,text input, touuchable and view
 import { Text, TextInput, TouchableOpacity, View } from "react-native";
 
 // import MainStyle
 
 allTeams = []
 
 const axios = require('axios');

 function p(){

   let newTeam1 = 
   {
   coach: 'A',
   teamName: 'testTeam1',
   playerIDs: ['testp1','testp2'],
   };
   axios.post("http://localhost:4000/maketeam", newTeam1);


   let newTeam2 = 
   {
   coach: 'B',
   teamName: 'testTeam2',
   playerIDs: ['testp1','testp2'],
   };
   axios.post("http://localhost:4000/maketeam", newTeam2);


   let newTeam3 = 
   {
   coach: 'C',
   teamName: 'testTeam3',
   playerIDs: ['testp1','testp2'],
   };
   axios.post("http://localhost:4000/maketeam", newTeam3);

   let newTeam4 = 
   {
   coach: 'C',
   teamName: 'testTeam4',
   playerIDs: ['testp1','testp2'],
   };
   axios.post("http://localhost:4000/maketeam", newTeam4);
 }
 
 
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
 
      mapTeams(teams),
      p()
 
    )
 
 }