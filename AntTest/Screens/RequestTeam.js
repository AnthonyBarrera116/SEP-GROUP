// import react
import React from 'react';

//import Text, Text Input, touchable and view
import {Text, TextInput, TouchableOpacity, View} from 'react-native';


// Import FormStyle and mainstyle
import MainStyle from "../Styles/MainStyle.style";
import FormStyle from "../Styles/FormStyle";

// import axios
const axios = require('axios');

// request team
export default function RequestTeam({navigation,route}) {
  
  const url="http://localhost:4000/makereq"
  const [teamName, setTeamName] = React.useState('');

  // team handle submit
  function handleSubmit(teamName) {
   
    // const team request
    const team = 
    {
        RequesterID: route.params.nam, //User making the request
        SecondaryID: teamName, //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: "",
        RequestType: 2, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
        Status: 0, //0-Pending, 1-Accepted, 2-Rejected
    };

    // axios
    axios
      .post(url,team)
      .then(response => console.log(JSON.stringify(response.data)))
      .catch(error => {
        console.log(error);
      });

    // Alert team name 
    alert(JSON.stringify(team));

    // pop back to profile
    navigation.pop();
  }

  return (
    <>
      {/*Title for the page*/}
      <View style={FormStyle.groupView}>
        <Text style={MainStyle.emphasisText}>Register To Join Team</Text>
      </View>

      {/*Input fields*/}
      <View style={FormStyle.groupView}>
        {/*Text for the username label*/}
        <Text style={FormStyle.label}>Team Name:</Text>
        {/*Username input field*/}
        <TextInput
          onChangeText={setTeamName}
          style={FormStyle.input}
          autoCapitalize={false}
        />

        {/*'Submit' button
            calls the 'handleSubmit()' function, which sends
            data entered on this screen to the UserController*/}
        <TouchableOpacity
          style={FormStyle.formButton}
          onPress={() => handleSubmit(teamName)}>
          {/*Text for the 'Submit' button*/}
          <Text style={FormStyle.formButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
