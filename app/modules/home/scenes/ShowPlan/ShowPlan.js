import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import { AsyncStorage } from 'react-native';

import {Button, ButtonGroup, Divider} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { theme } from "../../../auth/index"
const { color } = theme;

class ShowPlan extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <Text style={styles.titleText}>{ this.props.plan.pname } </Text>
                    <Divider style={{ backgroundColor: '#181818', marginVertical: 10 }} />
                    <Text style={styles.subtText}>Descripción:</Text>
                    <View style={styles.commentsContainer}>
                        <Text style={styles.infoText}>{ this.props.plan.pdescription }</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(null)(ShowPlan);
