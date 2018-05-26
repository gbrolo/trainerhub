import React from 'react';
var { View, StyleSheet, Alert, Text} = require('react-native');

import {ButtonGroup, List, FormLabel, FormInput, ListItem} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import { AsyncStorage } from 'react-native';

import styles from "./styles"

import { theme } from "../../../home/index"

const { color } = theme;

class ShowId extends React.Component {
    constructor(){
        super();
        this.state = { id: 'cargando...'};

        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.showPlan = this.showPlan.bind(this);
        this.getId = this.getId.bind(this);
        this.getId();
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    onChangeScreen(selectedIndex) {
        if (selectedIndex === 0) {
            Actions.Home();
        } else if (selectedIndex === 1) {
            Actions.Alimentation({ plans: this.props.plans });
        }
    }

    showPlan(plan) {
        console.log('training info from Home', plan);
        Actions.ShowPlan({ plan: plan });
    }

    getId() {
        console.log('Entering getId');
        AsyncStorage.getItem('user').then((value) => {
            console.log('Local storage');
            let userObj = JSON.parse(value);
            this.setState({id: userObj.uid});

        });
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.tabbar}>
                  <ButtonGroup
                      buttons={['ENTRENAMIENTO', 'ALIMENTACIÓN', 'PERFIL']}
                      containerStyle={styles.buttonTabBar}
                      selectedIndex={2}
                      onPress={this.onChangeScreen}
                      textStyle={styles.buttonTextTabBar}
                      containerBorderRadius={0}
                      innerBorderStyle={{borderStyle: "hidden"}}
                      selectedButtonStyle={{backgroundColor: "#f7f7f7"}}
                      selectedTextStyle={{color: "#1c97cc"}}/>
              </View>
              <View>
                <FormLabel>Su código</FormLabel>
                <FormInput value={this.state.id}/>

              </View>
            </View>
        );
    }
}

export default connect(null)(ShowId);
