//Imports React form Native
import React from 'react';

//Navigation Imports and Paper
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';

// Imports Screens
import ProfileWithTeam from '../Screens/ProfileWithTeam'
import ProfileWithoutTeam from '../Screens/ProfileWithoutTeam'
import CoachProfile from '../Screens/CoachProfile'
import DeleteTeam from '../Screens/DeleteTeam'
import DeleteAccount from '../Screens/DeleteAccount'
import TeamRequestoPlayer from '../Screens/TeamRequestoPlayer'
import RequestTeam from '../Screens/RequestTeam'
import requestToCoach from '../Screens/createTeam-requestToCoach'
import CreateAccount from '../Screens/AccountCreateScreen';
import SignIn from '../Screens/SignIn';
import Admin from '../Screens/AdminProfile';
import EditPlayer from '../Screens/EditPlayer'

import CoachRe from '../Screens/CoachRequests'
import CoachRequestsPage from '../Screens/CoachRequestsPage';
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

          <Stack.Screen name="Admin" component={Admin} 
          options={{
            gestureEnabled: false,
            headerShown: false,
            headerLeft: () => <></>,
          }}
          />
          <Stack.Screen name="CoachRequestsPage" component={CoachRequestsPage} />
          <Stack.Screen name="CoachRequest" component={CoachRe} />
          <Stack.Screen name="Edit" component={EditPlayer} />
          <Stack.Screen name="DeleteTeam" component={DeleteTeam} />
          <Stack.Screen name="DeleteAccount" component={DeleteAccount}/>
          <Stack.Screen name="TeamRequestoPlayer" component={TeamRequestoPlayer} />
          <Stack.Screen name="RequestTeam" component={RequestTeam} />
          <Stack.Screen name="RequatCoach" component={requestToCoach} />

          
        </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    
  );
}