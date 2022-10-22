// Imports React from react
import React from "react";

// Imports Stylesheet and View from React-native
import {StyleSheet ,View}    from "react-native";

// function fro notficationsBox for all three profiles (Coach,Without Team and With Team)
export default function NotificationsBox(){

  // Creation of style sheet
  const styles = StyleSheet.create({
 
    // Boarder box
    RectangleShapeView1: {
        marginTop: 110,
        width: 165 * 2,
        height: 180,
        backgroundColor: '#000000' 
    },
     
    // Inside Box
    RectangleShapeView2: {
      marginTop: -175,
      width: 160 * 2,
      height: 170,
      left:5 ,
      backgroundColor: '#f0f8ff'
    }
    
  });

  // returns both boxes
  return (<>   

    <View style={styles.RectangleShapeView1}>

    </View>

        
    <View style={styles.RectangleShapeView2}>


    </View>
            
  </>);
   
}
