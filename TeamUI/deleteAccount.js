import React from 'react';
import { Text, TextInput, TouchableOpacity, View} from 'react-native';
import MainStyle from '../MainStyle.style';
import FormStyle from '../Form.style';


export default function deleteAccount() {
    
    
    const confirmMessage() {
        alert('Account has been deleted');
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
    
