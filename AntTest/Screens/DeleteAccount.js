// import React
import React from 'react';

// import Text, Touchable, view
import { Text, TouchableOpacity, View} from 'react-native';

// import mainstyle and formstyle
import MainStyle from '../Styles/MainStyle.style';
import FormStyle from '../Styles/FormStyle';

// delete account
export default function DeleteAccount({navigation}) {
    
  //Alert messege
  function confirmMessage () {

    //alert account has been deleted  
    alert('Account has been deleted');

    // pop to log in screen
    navigation.pop(2);
        
  }

  return (
    <>
      {/*Title for page*/}
      <View style={FormStyle.groupView}>
        <Text style={MainStyle.emphasisText}>Delete Account</Text>
      </View>
    
    
      <View style={MainStyle.centerView}>
        {/*Text for confirming desire to delete*/}
        <Text style={FormStyle.label}>Are you Sure?:</Text>
            
      
          {/*'Delete' touchable
              calls the 'confirmMessage()' which outs a message confirming 
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
    
