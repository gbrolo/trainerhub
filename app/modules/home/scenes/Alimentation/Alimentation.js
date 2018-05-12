import React from 'react';
var { View, StyleSheet, Alert } = require('react-native');

import {ButtonGroup} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as home, theme } from "../../../home/index"
const { signOut } = home;

const { color } = theme;

class Alimentation extends React.Component {
    constructor(){
        super();
        this.state = { }

        this.onSignOut = this.onSignOut.bind(this);
        this.onChangeScreen = this.onChangeScreen.bind(this);
    }

    onSignOut() {
        this.props.signOut(this.onSuccess.bind(this), this.onError.bind(this))
    }

    onSuccess() {
        Actions.reset("Auth")
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    onChangeScreen(selectedIndex) {
        if (selectedIndex === 0) {
            Actions.Home()
        } else if (selectedIndex === 1) {
            Actions.Alimentation()
        } else if (selectedIndex === 2) {
            //pending
        }
    }

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.tabbar}>
                  <ButtonGroup
                      buttons={['ENTRENAMIENTO', 'ALIMENTACIÓN', 'EXPLORAR']}
                      containerStyle={styles.buttonTabBar}
                      selectedIndex={1}
                      onPress={this.onChangeScreen}
                      textStyle={styles.buttonTextTabBar}
                      containerBorderRadius={0}
                      innerBorderStyle={{borderStyle: "hidden"}}
                      selectedButtonStyle={{backgroundColor: "#f7f7f7"}}
                      selectedTextStyle={{color: "#1c97cc"}}/>
              </View>
            </View>
        );
    }
}

export default connect(null)(Alimentation);
