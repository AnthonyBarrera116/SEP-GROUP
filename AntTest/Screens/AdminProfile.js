// Imports React form react
import React from "react";

// Imports View, Text and Image
import { Text,View, Image,TouchableOpacity}    from "react-native";

// Button style
import FormStyle from "../Styles/ButtonStyle";

// Admin Profile Organized function
export default function AdminProfile({navigation}){

   // Buttons for Admin Page
   return (<>   
      <View style = {{marginTop:20,alignItems: 'center',flex:1}}>
         
         {/*Name user*/}
         <Text>
            
            name_Admin

         </Text>
            
         <View>

            {/*Profile image*/}
            <Image source={{uri: 'https://cdn4.iconfinder.com/data/icons/symbols-vol-1-1/40/user-person-single-id-account-player-male-female-512.png'}} style={{width: 100, height: 100}} />
                  
         </View>
      
         <View style = {{flexDirection:'column',alignItems:'center'}}>
                  
            
            <View style = {{marginTop:-80}}>
      
               {/*Top Buttons*/}
               <View style = {{flex:1}}>
        
                  <View style={FormStyle.button}>
                  
                  </View>

                  {/*Edit Players Button*/}
                  <TouchableOpacity style={FormStyle.formButton} onPress={() =>navigation.navigate('Edit')}>
                     
                     <Text style={FormStyle.formButtonText}>Edit Player/Delete</Text>
                  
                  </TouchableOpacity>

                  {/*Coach Requests Button*/}
                              
                  < TouchableOpacity style={FormStyle.formButton} onPress={() =>navigation.navigate('CoachRequest')}>
                                    
                     <Text style={FormStyle.formButtonText}>Coach Requests</Text>
                                  
                  </TouchableOpacity>

                  
                  <TouchableOpacity style={FormStyle.formButton} onPress={() => navigation.pop() }>
                           
                           <Text style={FormStyle.formButtonText}>Sign Out</Text>
                        
                  </TouchableOpacity>

               </View>

               
            </View>
            
               
      
         </View>

      </View>
        
   </>);
      
}
