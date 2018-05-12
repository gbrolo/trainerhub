import React from 'react';
var { View, StyleSheet, Alert } = require('react-native');

import {ButtonGroup, List, ListItem} from 'react-native-elements'
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';

import styles from "./styles"

import { theme } from "../../../home/index"

const { color } = theme;

class Alimentation extends React.Component {
    constructor(){
        super();
        this.state = { }

        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.showPlan = this.showPlan.bind(this);
    }

    onError(error) {
        Alert.alert('Oops!', error.message);
    }

    onChangeScreen(selectedIndex) {
        if (selectedIndex === 0) {
            Actions.Home()
        } else if (selectedIndex === 2) {
            //pending
        }
    }

    showPlan(plan) {
        console.log('training info from Home', plan);
        Actions.ShowPlan({ plan: plan });
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

              <List>
                  {
                      this.props.plans.map((l, i) => (
                          <ListItem
                              key={i}
                              title={l.pname}
                              leftIcon={{ name: 'assignment' }}
                              onPress={() => this.showPlan(l)}
                          />
                      ))
                  }
              </List>
            </View>
        );
    }
}

export default connect(null)(Alimentation);
