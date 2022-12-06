//Timer based off of this timer: https://github.com/haryphamdev/simple-react-countdown-timer

import React, {Component} from "react";
import { Text, View, Button, Alert, StyleSheet, TouchableOpacity } from "react-native";

global.timerStopped = true;
global.timerFinished = false;
const COUNTDOWN_TIME = 900; //15 minutes in seconds (one football quarter is 15 minutes)
export default class Timer extends React.Component
{
    constructor(props){
        super(props);
        this.state={
            count: COUNTDOWN_TIME
        }
    }
    startTimer(){
        //Alert.alert('Timer Started');
        if (global.timerStopped === true)
        {
            global.timerStopped = false;
            this.timer = setInterval(()=>{
                let {count} = this.state;
                this.setState({
                    count: count - 1
                });
            }, 1000);
        }
    }
    stopTimer()
    {
        if(global.timerFinished === false)
        {
            global.timerStopped = true;
            clearInterval(this.timer);
        }
    }
    fmtMSS(s){// Format minute:second second
        return (s-(s%=60))/60+(9<s?':':':0')+s;
    }

    componentDidUpdate(prevProps, prevState, snapshot){ //Checks for when timer reaches zero and stops it
        if(prevState.count !== this.state.count && this.state.count === 0){
            global.timerFinished = true;
            global.timerStopped = false;
            clearInterval(this.timer);
        }
    }
    render() {
        let { count } = this.state;
        return(
            <>
                <Text style={styles.timer}>{this.fmtMSS(count)}</Text>
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.startButtonContainer}
                        onPress={()=> this.startTimer()}>
                        <Text style={styles.buttonText}>
                            Start the clock
                        </Text>
                        
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.stopButtonContainer}
                        onPress={()=> this.stopTimer()}>
                        <Text style={styles.buttonText}>
                            Pause the clock
                        </Text>
                            
                    </TouchableOpacity>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
    },
    startButtonContainer: {
        backgroundColor: "#00ff00",
        width: "50%",
        height: "5%",
        justifyContent: 'center',
    },
    stopButtonContainer: {
        backgroundColor: "#ff0000",
        width: "50%",
        height: "5%",
        justifyContent: 'center',
    },
    buttonText:{
        color: "#000000",
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 20,
    },
    timer:{
        fontFamily: 'CursedTimerUlil-Aznm',
        textAlign: 'center',
        fontSize: 100,
        color: "#000000"
    }
});