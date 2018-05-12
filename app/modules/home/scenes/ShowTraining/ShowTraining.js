import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import { AsyncStorage } from 'react-native';

import {Button, ButtonGroup, Divider} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { theme } from "../../../auth/index"
const { color } = theme;

class ShowTraining extends React.Component {
    constructor(props){
        super(props);

        this.state = {
        }

        this.startTraining = this.startTraining.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    startTraining() {
        console.log('training info from ShowTraining', this.props.training);
        Actions.TrainingScreen({ training: this.props.training });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>{ this.props.training.tname } </Text>
                    <Divider style={{ backgroundColor: '#181818', marginVertical: 10 }} />
                    <Text style={styles.infoText}>{ this.props.training.tsets } sets.</Text>
                    <Text style={styles.infoText}>{ this.props.training.treps } repeticiones.</Text>
                    <Text style={styles.infoText}>{ this.props.training.tdailyDuration } minutos estimados.</Text>
                    <Text style={styles.subtText}>Comentarios del entrenador:</Text>
                    <View style={styles.commentsContainer}>
                        <Text style={styles.infoText}>{ this.props.training.tcomments }</Text>
                    </View>
                </View>

                <Button
                    raised
                    borderRadius={4}
                    title={'EMPEZAR ENTRENAMIENTO'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.startTraining}/>
            </View>
        );
    }
}

export default connect(null)(ShowTraining);
