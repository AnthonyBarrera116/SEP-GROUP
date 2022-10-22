import React from "react";
import { findNodeHandle, Text, TextInput, TouchableOpacity, View } from "react-native";


export default function TeamFind(n){

    if(n == "YES"){
   
        return (<>   

            <View>

            <Text style={{color:'#fff',textAlign:'center',fontSize:15, paddingLeft: 10,paddingRight:10, marginTop:10}}>
                {n}
            </Text>

            </View>

        </>);

        
    }

    else{
   
        return (<>   

            <View>

            <Text style={{color:'#fff',textAlign:'center',fontSize:15, paddingLeft: 10,paddingRight:10, marginTop:10}}>
                null
            </Text>

            </View>

        </>);

        
    }

   
     
     
   
   }
   
   