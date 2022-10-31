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

export default function RequestCoach({navigation}) {
  const [teamName, setTeamName] = React.useState('');
  const [reasonToCoach, setReasonToCoach] = React.useState('');
  
  // funtion to handle submit
  function handleSubmit(teamName, reason) {
    
    // Const print alert
    const team = {
      Team: teamName,
      Reason: reason
    };

    // Axios import
    axios
      .post(teamName)
      .then(response => console.log(JSON.stringify(response.data)))
      .catch(error => {
        console.log(error);
      });

    // alert team name and reason
    alert(JSON.stringify(team));
    
    // pop back after request
    navigation.pop()
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
