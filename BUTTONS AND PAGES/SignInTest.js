import React from "react";

import ProfileWithTeam from "./ProfileWithTeam";
import ProfileWithoutTeam from "./ProfileWithoutTeam";
import CoachProfile from "./CoachProfile";

const name = 'YES'
const pass = 'A'
const coachStatus = 0
const team = 'null'

const n = 'YES'
const pa = 'A'


export default function SignInTest(){
 

   if(n === name){

      if(pass === pa){

         if(coachStatus === 0 && team === "null"){

            return (

               <ProfileWithoutTeam>
      
      
               </ProfileWithoutTeam>
            
      
      
            );

         }

         else if(coachStatus === 0 && team !== "null"){

            return (
      
               
            <ProfileWithTeam>


            </ProfileWithTeam>
      
      
            );
         

         }

         else if(coachStatus === 1 && team !== "null"){

            return (
      
                 
               <CoachProfile>


               </CoachProfile>
               
      
      
            );
         

         }

         else {
               
               
            alert("Error");
              
      
            
         }

      }

      else{

         
         alert("Wrong Password");
   
      }
   
      
   }

   else{

      alert("Account Doesn't exist Clicked");

   }


   

   

   
}
 