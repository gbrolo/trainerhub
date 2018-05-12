import React from 'react';
var { View, StyleSheet, Alert, Text } = require('react-native');

import { AsyncStorage } from 'react-native';

import {Button, ButtonGroup, List, ListItem} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { actions as auth, theme } from "../../../auth/index"
import { actions as home } from "../../../home/index"
const { signOut } = auth;
const { switchToTraining, switchToAlimentation, switchToExplore } = home;

const { color } = theme;

class Home extends React.Component {
    constructor(){
        super();
        var uData = AsyncStorage.getItem('user', (value) => {
          JSON.parse(value)
        });

        this.state = {
            userData: uData,
            trainings: [
                {
                    tname: 'Abdominales',
                    tdailyDuration: 5,
                    tcomments: 'Realizar de lunes a viernes.',
                    treps: 20,
                    tsets: 2
                }
            ],
            plans: [
                {
                    pname: 'Proteina',
                    pdescription: 'Tomarse un shake'
                }
            ]
        }

        this.onSignOut = this.onSignOut.bind(this);
        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.showTraining = this.showTraining.bind(this);
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
            Actions.Alimentation({ plans: this.state.plans })
        } else if (selectedIndex === 2) {
            // pending
        }
    }

    showTraining(training) {
        console.log('training info from Home', training);
        Actions.ShowTraining({ training: training });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabbar}>
                    <ButtonGroup
                        buttons={['ENTRENAMIENTO', 'ALIMENTACIÓN', 'EXPLORAR']}
                        containerStyle={styles.buttonTabBar}
                        selectedIndex={0}
                        onPress={this.onChangeScreen}
                        textStyle={styles.buttonTextTabBar}
                        containerBorderRadius={0}
                        innerBorderStyle={{borderStyle: "hidden"}}
                        selectedButtonStyle={{backgroundColor: "#f7f7f7"}}
                        selectedTextStyle={{color: "#1c97cc"}}/>
                </View>

                <List containerStyle={styles.trainingList}>
                    {
                        this.state.trainings.map((l, i) => (
                            <ListItem
                                key={i}
                                title={l.tname}
                                subtitle={l.treps + " repeticiones. " + l.tdailyDuration + " minutos."}
                                leftIcon={{ name: 'assignment' }}
                                onPress={() => this.showTraining(l)}
                            />
                        ))
                    }
                </List>

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
