// import react
import React from 'react';

// import Text, Touchable, Text Input, and view
import {Text, TextInput, TouchableOpacity, View} from 'react-native';


// Import FormStyle and mainstyle
import MainStyle from "../Styles/MainStyle.style";
import FormStyle from "../Styles/FormStyle";

// import axios
const axios = require('axios');

// Request Player
export default function TeamRequestoPlayer({navigation}) {

  // const for player
  const [playername, setplayername] = React.useState('');

  // handlesubmit for player
  function handleSubmit(player) {
    // TODO replace Team ID properly when framework is set up
    
    // player name
    const Play = {
      Player: player,
    };

    // axios
    axios
      .post(playername)
      .then(response => console.log(JSON.stringify(response.data)))
      .catch(error => {
        console.log(error);
      });

    // alert for player requested
    //alert(JSON.stringify(Play));

    // pop back to profile
    navigation.pop();
  }

  return (
    <>
      {/*Title for the page*/}
      <View style={FormStyle.groupView}>
        <Text style={MainStyle.emphasisText}>Request Player</Text>
      </View>

      {/*Input fields*/}
      <View style={FormStyle.groupView}>
        {/*Text for the username label*/}
        <Text style={FormStyle.label}>Player Name:</Text>
        {/*Username input field*/}
        <TextInput
          onChangeText={setplayername}
          style={FormStyle.input}
          autoCapitalize={false}
        />

        {/*'Submit' button
            calls the 'handleSubmit()' function, which sends
            data entered on this screen to the UserController*/}
        <TouchableOpacity
          style={FormStyle.formButton}
          onPress={() => handleSubmit(playername)}>
          {/*Text for the 'Submit' button*/}
          <Text style={FormStyle.formButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
