// Imports React from React
import React from "react";

// Imports view from React-native
import { View,ScrollView,StyleSheet,Text ,TouchableOpacity} from "react-native";

import { useState ,useEffect} from 'react';
// Standings box for standings

import FormStyle from "../Styles/ButtonStyle";


const axios = require('axios');

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
// Standings function screen
export default function Standings(){

   

   teamScores = []
   const [posts, setPosts] = useState([]);
   // Gets teams form teams js
   useEffect(() => {
       axios.get("http://localhost:4000/getallteams")
       .then(response => {
           
           setPosts(response.data);
           
       })
       
       .catch((error) => 
       {

           console.log(error);

       });
   }, []);


   // Getting each team with wins,loses and pts
   for(x = 0; x < posts.length;x++){
      holder = []
      holder.push(posts[x].TeamName.toString())
      holder.push(posts[x].W)
      holder.push(posts[x].L)
      holder.push(posts[x].W * 2)
      teamScores.push(holder)

   }
   
   // Sorts Teams by points
   teamScores.sort(function (x, y) {
      return y.pts- x.pts;
   });
   // returns Standings box
    return (<>

      <View style = {{alignItems:"center"}}>

         <Text style={styles.topBar}>Standings</Text>

      </View>

      <ScrollView style = {{marginVertical:20,marginBottom:40}}>
            
         <View style={styles.welcome}>
            {teamScores.map((a,b)=>{

               return <View>
                                                      
                  <Text style={styles.team}>

                     {a[0]}
                              
                  </Text>

                  <Text style={styles.games}>

                     {a[1] + "-" + a[2] + "  " + a[2] + "pts"}

                  </Text>

               </View>
            })}
         </View>
            

      </ScrollView>


   </>);
}
