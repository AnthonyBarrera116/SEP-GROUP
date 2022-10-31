import React from "react";

import {Text,StyleSheet ,View}    from "react-native";


// Standing box function 
export default function StandingBox(){

   // Createing style sheet
   const styles = StyleSheet.create({
    
        // Boarder rectangle
        RectangleShapeView1: {
            alignItems: "center",
            marginTop: 125,
            width: 180 * 2,
            height: 450,
            backgroundColor: '#000000',
        },

        // Inside box
        RectangleShapeView2: {
            marginTop: 5,
            width: 170 * 2,
            height: 440,
            backgroundColor: '#f0ffff',
        }

    });
    
    // return boxes 
    return (<>   
       
        <View style={{alignItems:"center",}}>
       
            <Text> 
       
                Standings  
       
            </Text>

            <View style={{alignItems:"center"}}>

                <View style={styles.RectangleShapeView1}>
                
                    <View style={styles.RectangleShapeView2}>

                    
                    <Text style = {{textAlign:'center'}}> 

                        NO TEAMS 
                        
                    </Text>

                    </View>
            
                </View>
            
            </View>
              
        </View>
        
    </>);

}
