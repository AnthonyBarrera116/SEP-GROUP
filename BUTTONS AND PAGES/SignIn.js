import {React,Component} from "react";
import { Text, TextInput, TouchableOpacity, View }    from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FormStyle from "./ButtonStyle.js";


export default function SignIn({navigation}){

    return (

      <View style = {{marginTop:0,flex:1,flexDirection:'column'}}>
        
        <View style={FormStyle.button}>
        </View>
          
          <View style={{flex:2}}>
          <TouchableOpacity style={FormStyle.formButton}             
              onPress={() =>   navigation.navigate('ForthPage') }>
          <Text style={FormStyle.formButtonText}>Coach</Text>
          </TouchableOpacity>
          </View>

          <View style={FormStyle.button}>
          </View>
          
          <View style={{flex:2}}>
          <TouchableOpacity style={FormStyle.formButton}             
            onPress={() => navigation.navigate('FifthPage') }>
          <Text style={FormStyle.formButtonText}>Without Team</Text>
          </TouchableOpacity>
          </View>

          <View style={FormStyle.button}>
          </View>
              
          <View style={{flex:2}}>
          <TouchableOpacity style={FormStyle.formButton}             
              onPress={() =>  navigation.navigate('ThirdPage') }>
              <Text style={FormStyle.formButtonText}>With Team</Text>
          </TouchableOpacity>
          </View>

      </View>
    
      


    );

  
  

}

