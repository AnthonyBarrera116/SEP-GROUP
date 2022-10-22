import React from "react";

import {Text,StyleSheet ,View}    from "react-native";

import TeamFind from "./TeamFind";


export default function TeamBox(){
const name = TeamFind("YES");
   const styles = StyleSheet.create({
 
    RectangleShapeView1: {
     
        marginTop: 20,
        width: 65 * 2,
        height: 40,
        left:80,
        backgroundColor: '#000000',
       
        
        
    },
     
     
    });


    if (name !== 'null') {
        return (<>   


            <View style={{alignItems:"center",left:-100}}>

                <View style={styles.RectangleShapeView1}>
                
                <Text style = {{textAlign:'center'}}> 
                    {name}
                </Text>
            
                </View>
            
            </View>
              
        </>);
  }

 

  
   
}
