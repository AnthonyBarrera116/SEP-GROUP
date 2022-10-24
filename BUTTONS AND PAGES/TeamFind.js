// Imports React from React
import React from "react";

// Imports from Text and view from React-native
import { Text,View } from "react-native";

// Imports Team Find making sure they are on a team 
export default function TeamFind(n){

    // If Yes test 
    if(n == "YES"){
   
        // Returns text for teams box
        return (<>   

            <View>

                <Text style={{color:'#fff',textAlign:'center',fontSize:15, paddingLeft: 10,paddingRight:10, marginTop:10}}>
                    {n}
                </Text>

            </View>

        </>);

    }

    // Else not team
    else{
   
        // Returns null
        return (<>   

            <View>

                <Text style={{color:'#fff',textAlign:'center',fontSize:15, paddingLeft: 10,paddingRight:10, marginTop:10}}>
                    null
                </Text>

            </View>

        </>);

    }

}
   
   