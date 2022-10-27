import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';



import SignIn from '../Screens/SignIn';

import CreateAccount from '../Screens/CreateAccount';
import CoachProfile from '../Screens/CoachProfile'

import ProfileWithTeam from '../Screens/ProfileWithTeam'
import ProfileWithoutTeam from '../Screens/ProfileWithoutTeam'
const Stack = createNativeStackNavigator()

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