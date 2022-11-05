// import react
import React from 'react';

// import scrollview satylesheet, text and view
import { ScrollView,StyleSheet, Text, View, } from 'react-native';

// all team games
teamsGames = []

// Get scehdule
import Sch from "./Schedule"

// Stylsheet for box scores and top screen with home and away text
const styles = StyleSheet.create({

    Box: {
       
        margin: 20,
        height: 100,
        color: 'white',
        backgroundColor: '#20232a',
        borderColor: 'blue',
        borderWidth: 2,
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
    
    Home:{
        fontSize: 20,
        
        color: 'white',

    },
    Away:{
        
        color: 'white',
        fontSize: 20,
        textAlign:'right',
        marginTop:-25,

    },
    
});




// See games playing   
export default function ScrollScore() {

    // real time date
    const date = new Date()
    
    // Obatins scehdule
    teamsGames = Sch()

    // returns view
    return (
    <>
        
        
        <View style = {{alignItems:"center"}}>

            <Text style={styles.topBar}>Scores</Text>

        </View>

        <View style = {{alignItems:"center"}}>

            <Text style = {{fontSize: 30}}>
                    
                {(date.getMonth()+1) + " / " + (date.getDate() + 1)+ " / " + date.getFullYear()}
                    
            </Text>

        </View>


        
        <ScrollView style = {{marginVertical:20,marginBottom:40}}>
                
            {teamsGames.map((a,b)=>{

                if((a[2] == date.getDate() + 1) && (a[3] == date.getMonth()) && (a[4] == date.getFullYear()) ){

                    return <View style={styles.Box}>
                                                        
                    <Text style={styles.Home}>
    
                        {a[0]}
                                    
                    </Text>
    
                        
    
    
                    <Text style={styles.Away}>
    
                        {a[1]}
    
                    </Text>
    
                                    
                                    
                </View>

                }

                
            })}
            
                    

        </ScrollView>
        
        </>
      );
}