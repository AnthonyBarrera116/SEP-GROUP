//Imports React form Native
import React from 'react';

//Navigation Imports and Paper
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';


//Imports Sign In Screen
import SignIn from '../Screens/SignIn';

// Imports SIgn In Screen
import CreateAccount from '../Screens/CreateAccount';

// Imports profiles Screens
import CoachProfile from '../Screens/CoachProfile'
import ProfileWithTeam from '../Screens/ProfileWithTeam'
import ProfileWithoutTeam from '../Screens/ProfileWithoutTeam'

// Creates Stack Navigator
const Stack = createNativeStackNavigator()

// Naviagtion for Sign In
export default function SignInNav() {
  return (
    
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignIn" component={SignIn}options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }} 
          />
          <Stack.Screen name="CreateAccount" component={CreateAccount} 
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}
          />
          <Stack.Screen name="CoachProfile" component={CoachProfile} 
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}
          />
          <Stack.Screen name="ProfileWithTeam" component={ProfileWithTeam} 
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}
          />
          <Stack.Screen name="ProfileWithoutTeam" component={ProfileWithoutTeam} 
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}
          />
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    
  );
}