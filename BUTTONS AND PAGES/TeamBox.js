import React from "react";

import {Text,StyleSheet ,View}    from "react-native";


export default function NotificationsBox(){


   const styles = StyleSheet.create({
 
    RectangleShapeView1: {
     
        marginTop: 20,
        width: 65 * 2,
        height: 40,
        left:80,
        backgroundColor: '#000000'
       
        
        
    },
     
     
    });

  return (<>   

        <View style={styles.RectangleShapeView1}>

        </View>
            
    </>

    );
   
}
