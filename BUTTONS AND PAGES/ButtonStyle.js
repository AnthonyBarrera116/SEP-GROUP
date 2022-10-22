// Imports Stylesheet from React-native
import { StyleSheet } from "react-native";

// Creates style sheet
export default StyleSheet.create({
    
    // Buttons, label and input size 
    button:{ marginTop:150,marginLeft:10,marginRight:0},
    label:{paddingTop:10,fontSize:16,},
    input:{borderWidth: 1,borderRadius: 10,padding: 10,},

    // forms a button 
    formButton:{
        marginRight:0,marginLeft:-5,marginTop:5,    
        paddingTop:20,paddingBottom:20,backgroundColor:'black', 
        borderRadius:30,borderWidth: 1,borderColor: 'white'
    },

    
    // Text button text
    formButtonText:{
        color:'#fff',textAlign:'center',fontSize:15,  
        paddingLeft: 10,paddingRight:10
    }

});
    