// import react from react 
import React from "react";

// Text, stylesheet, view from react-native
import {Text,StyleSheet ,View}    from "react-native";

// Standingbox function
export default function StandingBox(){

   // creation of style
   const styles = StyleSheet.create({
 
        // Boarder box
        RectangleShapeView1: {
            alignItems: "center",
            marginTop: 50,
            width: 180 * 2,
            height: 75,
            backgroundColor: '#000000',
        },

        // inside box
        RectangleShapeView2: {
            marginTop: 2,
            width: 170 * 2,
            height: 70,
            backgroundColor: '#f0ffff',
        }

    });
    
    // Returns Score Box
    return (<>   
        <View style={{alignItems:"center",}}>
           
            <Text> 
    
                scores 
            
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

            <View style={{alignItems:"center"}}>

                <View style={styles.RectangleShapeView1}>
                    
                    <View style={styles.RectangleShapeView2}>

                        <Text style = {{textAlign:'center'}}> 
                                
                            NO TEAMS 
                        
                        </Text>

                    </View>
                
                </View>
                
            </View>
              

            <View style={{alignItems:"center"}}>

                <View style={styles.RectangleShapeView1}>
                    
                    <View style={styles.RectangleShapeView2}>

                        
                        <Text style = {{textAlign:'center'}}> 
                                
                            NO TEAMS 
                            
                        </Text>

                    </View>
                
                </View>
                
            </View>
              
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
