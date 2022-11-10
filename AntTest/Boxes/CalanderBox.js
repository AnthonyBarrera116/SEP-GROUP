// Import React
import React from "react";

// Imports text,Stylesheet, and View from React-native
import {Text,StyleSheet ,View}    from "react-native";

// Calander Box Function
export default function CalanderBox(){

    // Style Sheet for 2 boxes
   const styles = StyleSheet.create({
    
        // Inside Box
        RectangleShapeView: {
            margin: 20,
            height: 675,
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
        games:{
        
            color: 'white',
            fontSize: 20,
            textAlign:'right',
            marginTop:-25,
    
        },
        

    });
    
    // Returns Box
    return (<>   

    <View>
    <View style = {{alignItems:"center"}}>

    <Text style={styles.topBar}>Calander
    
    </Text>
    </View>

    <View style={styles.RectangleShapeView}>

        <Text style = {styles.games}>GIIGIH</Text>

    </View>

    </View>

    </>);


 

  
   
}
