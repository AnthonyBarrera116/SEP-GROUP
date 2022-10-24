// Imports react from react
import React from "react";

// Imports Text, Style sheet and view from React-native
import {Text,StyleSheet ,View}    from "react-native";

// Imports team find for checking team
import TeamFind from "./TeamFind";

// function for team box for Coach and Player With Team screen
export default function TeamBox(){

    // Constant Varibale for team find
    const name = TeamFind("YES");

    // Style Creation
    const styles = StyleSheet.create({
        
        // Cretaion of box for teambox
        RectangleShapeView1: {
            marginTop: 20,
            width: 65 * 2,
            height: 40,
            left:80,
            backgroundColor: '#000000',
        },
     
    });

    // If team is not null return box and team name for coach and player with team
    if (name !== 'null') {

        // Returns team and box
        return (<>   

            <View style={{alignItems:"center",left:-100}}>

                <View style={styles.RectangleShapeView1}>
                
                    <Text style = {{textAlign:'center'}}> 
                        {name}
                    </Text>
            
                </View>
            
            </View>
              
        </>);}
   
}
