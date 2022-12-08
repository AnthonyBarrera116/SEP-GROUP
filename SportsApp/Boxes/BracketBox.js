// Import React
import React from 'react';

// Imports text,Stylesheet, and View from React-native
import {Text, StyleSheet, View} from 'react-native';
// Calander Box Function
export default function BracketBox() {
  // Style Sheet for 2 boxes
  // const width = 100;
  // const margintop = 5;
  // const styles = StyleSheet.create({
  //   // Inside Box
  //   RectangleShapeView2: {
  //     marginTop: margintop,
  //     marginLeft: -200,
  //     width: width,
  //     height: width,
  //     backgroundColor: '#00FF00',
  //   },
  //   // Inside Box
  //   RectangleShapeView4: {
  //     marginTop: margintop,
  //     marginLeft: 0,
  //     width: width,
  //     height: width,
  //     backgroundColor: '#00FF00',
  //   },
  // });
  // var group = [];
  // for (let i = 0; i < 4; i++) {
  //   group.push(
  //     <View key={i} style={{marginleft: 'center'}}>
  //       <View style={{alignItems: 'center'}}>
  //         <View style={styles.RectangleShapeView2}>
  //           <Text style={{textAlign: 'center'}}>NO GAMES</Text>
  //         </View>
  //       </View>
  //     </View>,
  //   );
  // }

  // var quarter = [];
  // for (let i = 0; i < 4; i++) {
  //   quarter.push(
  //     <View key={i} style={{marginleft: 'center'}}>
  //       <View style={{alignItems: 'center'}}>
  //         <View style={styles.RectangleShapeView4}>
  //           <Text style={{textAlign: 'center'}}>NO GAMES</Text>
  //         </View>
  //       </View>
  //     </View>,
  //   );
  // }
  var spaces = '          ';

  //returns Box
  return (
    <>
      <Text>person1</Text>
      <Text>{spaces}person1</Text>
      <Text>person2{spaces} person1</Text>
      <Text>{spaces}person3</Text>
      <Text>person4</Text>
      <Text>
        {spaces}
        {spaces}
        {spaces}
        {spaces}person1
      </Text>
      <Text>person5</Text>
      <Text>{spaces}person5</Text>
      <Text>person6{spaces} person5</Text>
      <Text>{spaces}person7</Text>
      <Text>person8</Text>
    </>
  );
}
