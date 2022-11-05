// Imports React from React
import React from "react";

// Imports view from React-native
import { View,ScrollView,StyleSheet,Text } from "react-native";

// Standings box for standings

standing = [{name:'A',Record: "1-2",pts: 2 },{name:'B',Record:"2-1",pts: 4},{name:'C',Record:"0-3",pts: 0}]

const styles = StyleSheet.create({

   welcome: {
      
       height: 500,
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

   standing.sort(function (x, y) {
      return y.pts- x.pts;
   });

   console.log(standing)

   // returns Standings box
    return (<>

      <View style = {{alignItems:"center"}}>

         <Text style={styles.topBar}>Standings</Text>

      </View>

      <ScrollView style = {{marginVertical:20,marginBottom:40}}>
         
      <View style={styles.welcome}>
         {standing.map((a,b)=>{

            return <View>
                                                   
               <Text style={styles.team}>

                  {a.name}
                           
               </Text>

               


               <Text style={styles.games}>

                  {a.Record}

               </Text>
               

              

                
                
         </View>
         })}
         </View>
         

      </ScrollView>
        


   </>);
}
