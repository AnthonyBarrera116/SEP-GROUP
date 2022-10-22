// Imports react
import React from "react";

// Imports all 3 styles of profiles
import ProfileWithTeam from "./ProfileWithTeam";
import ProfileWithoutTeam from "./ProfileWithoutTeam";
import CoachProfile from "./CoachProfile";

// TEST
const name = 'YES'
const pass = 'A'
const coachStatus = 0
const team = 'null'
const n = 'YES'
const pa = 'A'

// Test Sign in to see all profiles Styles
export default function SignInTest(){
 
   // Checks name
   if(n === name){

      // Checks password
      if(pass === pa){

         // Checks Coach status is no and no team
         if(coachStatus === 0 && team === "null"){

            // Returns Profile Without Team
            return (

               // Profile without team Style
               <ProfileWithoutTeam>
      
               </ProfileWithoutTeam>
      
            );

         }

         // Checks Coach Status is no and if on a team
         else if(coachStatus === 0 && team !== "null"){

            // return Profile with team
            return (
      
               // Profile with team style
               <ProfileWithTeam>

               </ProfileWithTeam>
      
            );
      
         }

         // Checks Coach Status is yes and if on a team
         else if(coachStatus === 1 && team !== "null"){

            // returns Coach profile
            return (
      
               // Profile coach Style
               <CoachProfile>

               </CoachProfile>
      
            );
         
         }

         // Error if all fails
         else {
               
            alert("Error");
              
         }

      }

      // Else Wrong Password
      else{
         
         // Wrong Password Alert
         alert("Wrong Password");
   
      }
   
   }

   // Else Account Doesn't exist
   else{

      // No Account Alert
      alert("Account Doesn't exist Clicked");

   }
   
}
 