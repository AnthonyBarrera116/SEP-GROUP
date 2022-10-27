import React from 'react';
import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainStyle from '../MainStyle.style';
import FormStyle from '../Form.style';

const axios = require('axios');

export default function LoginScreen(props) {
  const [teamName, setTeamName] = React.useState('');
  const [reasonToCoach, setReasonToCoach] = React.useState('');
  function handleSubmit(teamName, reasonToCoach) {
    // TODO replace Team ID properly when framework is set up
    
    function useInput(reasonToCoach) {
        const [reasonToCoach, setReasonToCoach] = useState('');
        function onChange(e) {
          setReasonToCoach(e.target.value);
        }
        return {
          value,
          onChange,
        };
      }
      
    

    const team = {
      Team: teamName,
    };
    console.log(teamName);
    axios
      .post(teamName)
      .then(response => console.log(JSON.stringify(response.data)))
      .catch(error => {
        console.log(error);
      });

    alert(JSON.stringify(team));
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
          onPress={() => handleSubmit(teamName, reasonToCoach, props.url)}>
          {/*Text for the 'Submit' button*/}
          <Text style={FormStyle.formButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
