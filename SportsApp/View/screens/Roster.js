/* eslint-disable react-native/no-inline-styles */
// Imports React from React
import React from 'react';

// Imports view from React-native
import {View, ScrollView, StyleSheet, Text} from 'react-native';

// Standings box for standings

team = {name: 'Team A'};
//To Map data onto table, remove the roster variable team contains Team name
roster = [
  {name: 'Anthony', Position: 'QB'},
  {name: 'BlackSmith', Position: 'TE'},
  {name: 'Colorado', Position: 'RB'},
  {name: 'Luis', Position: 'DEF'},
];

const styles = StyleSheet.create({
  welcome: {
    height: 500,
    color: 'white',
    backgroundColor: '#20232a',
    textAlign: 'center',
  },

  topBar: {
    width: 500 * 2,
    height: 50,
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#20232a',
    flexDirection: 'row',
  },

  team: {
    fontSize: 20,
    margin: 5,

    color: 'white',
  },
  games: {
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
    marginTop: -30,
  },
});
// Standings function screen
export default function Roster() {
  roster.sort(function (x, y) {
    return x > y;
  });

  console.log(roster);

  // returns Roster box
  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.topBar}>Roster for {team.name}</Text>
      </View>

      <ScrollView style={{marginVertical: 10, marginBottom: 20}}>
        <View style={styles.welcome}>
          {roster.map((a, b) => {
            return (
              <View>
                <Text style={styles.team}>
                  {a.name} - {a.Position}
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
