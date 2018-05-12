import React from 'react';
var { View, StyleSheet, Alert, Text, ScrollView } = require('react-native');

import { AsyncStorage } from 'react-native';

import {Button, ButtonGroup, Divider} from 'react-native-elements'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { theme } from "../../../auth/index"
const { color } = theme;

class TrainingScreen extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            stopWatchStart: false,
            stopWatchReset: false,
        }

        this.toggleStopwatch = this.toggleStopwatch.bind(this);
        this.resetStopwatch = this.resetStopwatch.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    toggleStopwatch() {
        this.setState({stopWatchStart: !this.state.stopWatchStart, stopWatchReset: false});
    }

    resetStopwatch() {
        this.setState({stopWatchStart: false, stopWatchReset: true});
    }

    getFormattedTime(time) {
        this.currentTime = time;
    };

    startTraining(training) {
        console.log('training info from ShowTraining', training);
        Actions.TrainingScreen({ training: training });
    }

    handleFinish() {
        Alert.alert('Entrenamiento Terminado', '¡Terminaste el entrenamiento!');
        Actions.Home();
    }

    render() {
        const options = {
            container: {
              backgroundColor: '#f0f0f0'
            },
            text: {
              fontSize: 60,
              color: '#181818',
              textAlign: "center"
            }
        };

        return (
            <ScrollView style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>{ this.props.training.tname } </Text>
                    <Divider style={{ backgroundColor: '#181818', marginVertical: 10 }} />
                    <Text style={styles.infoText}>{ this.props.training.tsets } sets.</Text>
                    <Text style={styles.infoText}>{ this.props.training.treps } repeticiones.</Text>
                    <Text style={styles.infoText}>{ this.props.training.tdailyDuration } minutos.</Text>
                </View>

                <View style={styles.infoContainer}>
                    <Timer start={this.state.stopWatchStart}
                        reset={this.state.stopWatchReset}
                        getTime={this.getFormattedTime}
                        totalDuration={this.props.training.tdailyDuration * 60000}
                        handleFinish={this.handleFinish}
                        options={options}/>

                    <Button
                        raised
                        borderRadius={4}
                        title={!this.state.stopWatchStart ? "EMPEZAR" : "PAUSAR"}
                        containerViewStyle={[styles.containerView]}
                        buttonStyle={[styles.buttonStart]}
                        textStyle={styles.buttonText}
                        onPress={this.toggleStopwatch}/>

                    <Button
                        raised
                        borderRadius={4}
                        title={'REINICIAR'}
                        containerViewStyle={[styles.containerView]}
                        buttonStyle={[styles.buttonRestart]}
                        textStyle={styles.buttonText}
                        onPress={this.resetStopwatch}/>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.infoText}>Si ya terminaste todos tus sets, puedes finalizar el entrenamiento.</Text>
                    <Button
                        raised
                        borderRadius={4}
                        title={'TERMINÉ LOS SETS'}
                        containerViewStyle={[styles.containerView]}
                        buttonStyle={[styles.button]}
                        textStyle={styles.buttonText}
                        onPress={this.handleFinish}/>
                </View>
            </ScrollView>
        );
    }
}

export default connect(null)(TrainingScreen);
