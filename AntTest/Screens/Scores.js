// Imports React
import React from "react";

// Imports View from React-native
import { View } from "react-native";

// Score boxs for box screen
import ScrollScore from "../Screens/ScrollScore";

import Teams, {GetTeams}from "../teams";
import S from "../Schedule";
// Scores Function Screen

arrteams = []

export default function Scores(){

    // Returns view of Scores Boxes for Scores screen
   return (
      
      <ScrollScore></ScrollScore>

      
   
   );
}
