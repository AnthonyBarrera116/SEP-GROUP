// import React
import React from 'react';

// import Text, Touchable, view
import { Text, TouchableOpacity, View} from 'react-native';

// import mainstyle and formstyle
import MainStyle from "../Styles/MainStyle.style";
import FormStyle from "../Styles/FormStyle";

// Delete Team
export default function DeleteTeam({navigation}) {
    
  // Alert team deleted
  function confirmMessage () {
    
    // Alert
    alert('Team was deleted so please sign back in')

    // pop back to sign in Screen and re login
    navigation.pop(2);

  }

  return (
      <>
        {/*Title for page*/}
        <View style={FormStyle.groupView}>
          <Text style={MainStyle.emphasisText}>Delete Team</Text>
        </View>
    
          
      <View style={MainStyle.centerView}>
        {/*Text for confirming desire to delete*/}
        <Text style={FormStyle.label}>Are you Sure?:</Text> 
        {/*'Delete' touchable
            calls the 'confirmMessage()' function, which outs a message confirming 
            deletion*/}
        <TouchableOpacity
          style={FormStyle.formButton}
          onPress={() => confirmMessage( )}>
          {/*Text for the 'Submit' button*/}
            <Text style={FormStyle.formButtonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </>
  );    
}
