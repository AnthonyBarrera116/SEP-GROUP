// Import React
import React from "react";

// Imports text,Stylesheet, and View from React-native
import {Text,StyleSheet ,View}    from "react-native";

// Calander Box Function
export default function CalanderBox(){

    // Style Sheet for 2 boxes
   const styles = StyleSheet.create({
    
        // Rectangle box boarder
        RectangleShapeView1: {
            alignItems: "center",
            marginTop: 30,
            width: 180 * 2,
            height: 550,
            backgroundColor: '#000000',
        
        },

        // Inside Box
        RectangleShapeView2: {
            marginTop: 5,
            width: 170 * 2,
            height: 540,
            backgroundColor: '#f0ffff',
        
        }

    });
    
    // Returns Box
    return (<>   

        <View style={{alignItems:"center",}}>

            <Text> 

                Calander 

            </Text>

            <View style={{alignItems:"center"}}>

                <View style={styles.RectangleShapeView1}>
                        
                    <View style={styles.RectangleShapeView2}>

                            
                        <Text style = {{textAlign:'center'}}> 

                            NO GAMES 

                        </Text>

                    </View>
                    
                </View>
                
            </View>
              
        </View>

    </>);


 

  
   
}
