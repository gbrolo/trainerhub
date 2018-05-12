import React from 'react';
import { Scene, Router, ActionConst, Stack, Modal, Tabs } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';
import {connect} from 'react-redux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome';
import Register from '../modules/auth/scenes/Register';
import CompleteProfile from '../modules/auth/scenes/CompleteProfile';
import Login from '../modules/auth/scenes/Login';
import ForgotPassword from '../modules/auth/scenes/ForgotPassword';
import Home from '../modules/home/scenes/Home';
import Alimentation from '../modules/home/scenes/Alimentation';
import ShowTraining from '../modules/home/scenes/ShowTraining';
import TrainingScreen from '../modules/home/scenes/TrainingScreen';
import ShowPlan from '../modules/home/scenes/ShowPlan';

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { color, navTitleStyle } from "../styles/theme";

import { actions as auth, theme } from "../modules/auth/index"
import { actions as home } from "../modules/home/index"
const { signOut } = auth;
const { switchToTraining, switchToAlimentation, switchToExplore } = home;

class routes extends React.Component {
    constructor(props) {
        super(props);
        console.log('logging props from constructor', this.props);
        this.state = {
            isReady: false
        }
    }

    componentDidMount() {
        let _this = this;
        store.dispatch(checkLoginStatus((isLoggedIn) => {
            AsyncStorage.setItem('screenState', 'training');
            _this.setState({isReady: true, isLoggedIn, isScreenTraining: true});
        }));
    }

    render() {
        if (!this.state.isReady)
            return <Splash/>

        console.log('props from render', this.props);

        return (
            <Router>
                <Scene key="root" hideNavBar={true}
                       navigationBarStyle={{backgroundColor: "#1c97cc", marginTop: 25}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor={color.black}
                       navBarButtonColor={color.white}
                       titleStyle={{color: "white", fontSize: 14}}>
                    <Stack key="Auth" initial={!this.state.isLoggedIn}>
                        <Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
                        <Scene key="Register" component={Register} title="Registro" back/>
                        <Scene key="CompleteProfile" component={CompleteProfile} title="Complete su perfil" back={false}/>
                        <Scene key="Login" component={Login} title="Iniciar sesión"/>
                        <Scene key="ForgotPassword" component={ForgotPassword} title="Recuperar contraseña"/>
                    </Stack>

                    <Stack key="Main" initial={this.state.isLoggedIn}>
                        <Scene key="Home" component={Home} title="Entrenamiento" initial={true} back={false}/>
                        <Scene key="Alimentation" component={Alimentation} title="Alimentación" back={false}/>
                        <Scene key="ShowTraining" component={ShowTraining} title="Información del entrenamiento"/>
                        <Scene key="TrainingScreen" component={TrainingScreen} title="En entrenamiento"/>
                        <Scene key="ShowPlan" component={ShowPlan} title="Plan alimenticio"/>
                    </Stack>
                </Scene>
            </Router>
        )
    }
}

export default connect(null, { signOut })(routes);
