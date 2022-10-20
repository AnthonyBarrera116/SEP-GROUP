import React from "react";

import {StyleSheet ,View}    from "react-native";




export default function NotificationsBox(){


   const styles = StyleSheet.create({
 
    RectangleShapeView1: {
     
        marginTop: 110,
        width: 165 * 2,
        height: 180,
        backgroundColor: '#000000'
       
    },
     
     
    RectangleShapeView2: {
     
      marginTop: -175,
      width: 160 * 2,
      height: 170,
      left:5 ,
      backgroundColor: '#f0f8ff'
     
    }
     
    });

  return (<>   

        <View style={styles.RectangleShapeView1}>

        </View>

        
        <View style={styles.RectangleShapeView2}>


        </View>
            
    </>

    );
   
}
