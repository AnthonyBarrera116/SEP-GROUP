//This is an example code for Navigator// 
import React, { Component } from 'react';
//import react in our code. 
 
//Import react-navigation
import { createAppContainer } from 'react-navigation';

// Imports Creat Stack Navigator for Navigation
import { createStackNavigator} from 'react-navigation-stack';

// Import Sign In Screen
import SignIn from './SignIn';

// Import Profile with team Screen
import ProfileWithTeam from './ProfileWithTeam';

//Import Coach Profile Screen
import CoachProfile from './CoachProfile';

// Import Profile without team Screen
import ProfileWithoutTeam from './ProfileWithoutTeam';


// Navigation Stack
export default  Navigation = createStackNavigator({

    //Stack for Navigation of Profiles
    ProfileWithTeam: { screen: ProfileWithTeam },
    ProfileWithTeam: { screen: ProfileWithTeam }, 
    CoachProfile: { screen: CoachProfile }, 
    ProfileWithoutTeam: { screen: ProfileWithoutTeam }, 
  },
  
);