
// Imports React
import React from 'react';

// Imports Bottom Navigation from React-Native-Paper
import {BottomNavigation} from 'react-native-paper';

// Imports Scores Screen
import Scores from './Scores';

// Imports Standings screen
import Standings from './Standings';

// Imports Calander screen
import Calander from './Calander';

// Imports SignInNav screen
import SignInNav from '../NAVIGATION/SignInNav';

// Main Screen for going through Bottom Navigation
const MainScreen = () => {

  // Const index variable that is set by the navigation set on which tab
  const [index, setIndex] = React.useState(0);

  // Route of the file located
  const [routes] = React.useState([

    // Keys and titles and icons for each of the tabs
    { key: 'Scores', title: 'Scores', icon: { uri: 'https://cdn-icons-png.flaticon.com/512/334/334345.png' },color: 'blue'},
    { key: 'Standings', title: 'Standings' ,icon: { uri: 'https://icons.veryicon.com/png/o/miscellaneous/sk-common-simple-linear-icon/ranking-11.png' },color: 'blue'},
    { key: 'Calander', title: 'Calander',icon: { uri: 'https://cdn-icons-png.flaticon.com/512/55/55281.png' },color: 'blue' },
    { key: 'SignInNav', title: 'SignInNav',icon: { uri: 'https://cdn4.iconfinder.com/data/icons/e-commerce-181/512/477_profile__avatar__man_-512.png' },color: 'blue'},

  ]);

  // Render Scene for Bottom Navigation with the for tabs
  const renderScene = BottomNavigation.SceneMap({

    // All for options in bottom navigation
    Scores: Scores,
    Standings: Standings,
    Calander: Calander,
    SignInNav: SignInNav,

  });

  // Returns Bottom Navigation with index, routes and setting them with render scene
  return (
    
    // Calling Bottom Navigation
    <BottomNavigation

      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}

    />
    
    
  );

 
};

// Exports Mainscreen const
export default MainScreen;