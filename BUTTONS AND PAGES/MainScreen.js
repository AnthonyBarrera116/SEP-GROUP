import {React,Component} from "react"; 
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
 
import FirstPage from './MenuButtons';
import SecondPage from './SignIn';
import ThirdPage from './ProfileWithTeam';
import FifthPage from './ProfileWithoutTeam';
import ForthPage from './CoachProfile';

import 'react-native-gesture-handler';

import { createStackNavigator } from '@react-navigation/stack'; //Insert screens into a stack
import { NavigationContainer } from '@react-navigation/native'; //contains navigator and screen

const Stack = createStackNavigator();// createStackNavigator is used to create a stack like structure. 
//Whenever we navigate to a screen, it gets pushed to the stack and whenever we click the back button, 
//the screen pops off from the top of the stack.



export default function MainScreen(){
 
    return (
      <NavigationContainer> 
        <Stack.Navigator
        screenOptions={{
          headerShown: false}}>
          <Stack.Screen
            name="Home"
            component={FirstPage}
            
          /> 
          <Stack.Screen
            name="SecondPage"
            component={SecondPage}
            
            
          />

          <Stack.Screen
            name="Calander"
            component={ThirdPage}
            
            
          />
          <Stack.Screen
            name="ThirdPage"
            component={ThirdPage}
            
            
          />
          <Stack.Screen
            name="ForthPage"
            component={ForthPage}
           
            
          />
          <Stack.Screen
            name="FifthPage"
            component={FifthPage}
            
            
          />
        </Stack.Navigator>
      </NavigationContainer>
    );

}