//import react 
import React from 'react';

// import text,text input, touuchable and view
import { Text, TextInput, TouchableOpacity, View} from 'react-native';

// import mainstyle sheet
import MainStyle from "../Styles/MainStyle.style";

// Import FormStyle for Sign In buttons and log in
import FormStyle from "../Styles/FormStyle";

//import axios
const axios = require('axios');

const url="http://localhost:4000/makereq"
export default function RequestCoach({navigation,route}) {
  const [teamName, setTeamName] = React.useState('');
  const [reasonToCoach, setReasonToCoach] = React.useState('');
  
  // funtion to handle submit
  function handleSubmit(teamName, reason) {
    
    // Const print alert
    const team = 
    {
        RequesterID: route.params.nam, //User making the request
        SecondaryID: teamName, //Receiver of the request; could be playerID, coachID, or teamID depending on how you use it
        Reason: reason,
        RequestType: 0, //0-player requests to become coach, 1-Coach requests player, 2-Player requests to join team
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
    //alert(JSON.stringify(team));

    // alert team name and reason
    //alert(JSON.stringify(team));
    
    // pop back after request
    navigation.pop()
  }

  



  return (
    <>
      {/*Title for the page*/}
      <View style={FormStyle.groupView}>
        <Text style={MainStyle.emphasisText}>Request to Be Coach</Text>
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

        <Text style={FormStyle.label}>Reason to Coach:</Text>
        
        <TextInput
            onChangeText={setReasonToCoach}
            style={FormStyle.input}
            autoCapitalize={false}
        />
        {/*'Submit' button
            calls the 'handleSubmit()' function, which sends
            data entered on this screen to the UserController*/}
        <TouchableOpacity
          style={FormStyle.formButton}
          onPress={() => handleSubmit(teamName, reasonToCoach)}>
          {/*Text for the 'Submit' button*/}
          <Text style={FormStyle.formButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
