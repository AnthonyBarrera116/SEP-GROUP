// Import React 
import React from 'react';

// Imports text,Stylesheet, and View from React-native
import {Text, StyleSheet, View} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
// Calander Box Function
export default function BracketBox() {
  // Style Sheet for 2 boxes
  const width = 100;
  const margintop = 5;
  const styles = StyleSheet.create({
    // Inside Box
    RectangleShapeView2: {
      marginTop: margintop,
      marginLeft:-200,
      width: width ,
      height: width,
      backgroundColor: '#00FF00',
    },
    // Inside Box
    RectangleShapeView4: {
      marginTop: margintop,
      marginLeft:0,
      width: width ,
      height: width,
      backgroundColor: '#00FF00',
    },
  });
  var group = [];
  for (let i = 0; i < 4; i++) {
    group.push(
      <View key={i} style={{marginleft: 'center'}}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.RectangleShapeView2}>
              <Text style={{textAlign: 'center'}}>NO GAMES</Text>
            </View>
        </View>
      </View>,
    );
  }
  var quarter = [];
  for (let i = 0; i < 4; i++) {
    quarter.push(
      <View key={i} style={{marginleft: 'center'}}>
        <View style={{alignItems: 'center'}}>
            <View style={styles.RectangleShapeView4}>
              <Text style={{textAlign: 'center'}}>NO GAMES</Text>
          </View>
        </View>
      </View>,
    );
  }

  //returns Box
  return <>
  {group}
  {quarter}
  </>;
}

