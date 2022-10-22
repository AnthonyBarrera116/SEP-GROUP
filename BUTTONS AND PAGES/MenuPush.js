import {React,Component} from "react";
import FormStyle from "./ButtonStyle.js";


import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,TouchableOpacity} from 'react-native';

import FirstPage from './MenuButtons';


export default function MenuButtons({navigation}){

      return (
          <View style = {{marginTop:575,flex:1,flexDirection:'row'}}>
            
            <View style={FormStyle.button}>
            </View>
              
              <View style={{flex:2}}>
              <TouchableOpacity style={FormStyle.formButton}             
                  onPress={() => alert("BUTTON PRESSED")}>
              <Text style={FormStyle.formButtonText}>Scores</Text>
              </TouchableOpacity>
              </View>

              <View style={FormStyle.button}>
              </View>
              
              <View style={{flex:2}}>
              <TouchableOpacity style={FormStyle.formButton}             
                onPress={() => alert("BUTTON PRESSED")}>
              <Text style={FormStyle.formButtonText}>Calander</Text>
              </TouchableOpacity>
              </View>

              <View style={FormStyle.button}>
              </View>
                  
              <View style={{flex:2}}>
              <TouchableOpacity style={FormStyle.formButton}             
                  onPress={() => alert("BUTTON PRESSED")}>
                  <Text style={FormStyle.formButtonText}>Standings</Text>
              </TouchableOpacity>
              </View>

              <View style={FormStyle.button}>
              </View>
                  
              <View style={{flex:2}}>
              <TouchableOpacity style={FormStyle.formButton}             
                onPress={() => navigation.push('SecondPage')}>
              <Text style={FormStyle.formButtonText}>Profile</Text>
              </TouchableOpacity>
              </View>

          </View>
      );
      
}
