import React from "react";
import { Text, View } from "react-native";
import MenuButtons from "./MenuButtons";
export default function Calander({navigation}){
   return (
     <View>
        <Text>Calander!</Text>
        
        <MenuButtons items = {navigation}/>
     </View>


   );
}
