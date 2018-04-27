import React from 'react';
var { View, StyleSheet, Alert } = require('react-native');

import {Button, ButtonGroup} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
const { signOut } = auth;

const { color } = theme;

class Home extends React.Component {
    constructor(){
        super();
        this.state = { }

        this.onSignOut = this.onSignOut.bind(this);
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

    changeScreen(selectedIndex) {

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <ButtonGroup
                        buttons={['ENTRENAMIENTO', 'ALIMENTACIÓN', 'EXPLORAR']}
                        containerStyle={styles.buttonTabBar}
                        selectedIndex={0}
                        onPress={this.changeScreen}
                        textStyle={styles.buttonTextTabBar}
                        containerBorderRadius={0}
                        innerBorderStyle={{borderStyle: "hidden"}}
                        selectedButtonStyle={{backgroundColor: "#f7f7f7"}}
                        selectedTextStyle={{color: "#1c97cc"}}/>
                </View>

                <Button
                    raised
                    borderRadius={4}
                    title={'CERRAR SESIÓN'}
                    containerViewStyle={[styles.containerView]}
                    buttonStyle={[styles.button]}
                    textStyle={styles.buttonText}
                    onPress={this.onSignOut}/>
            </View>
        );
    }
}

export default connect(null, { signOut })(Home);
