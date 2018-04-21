import React from 'react';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { register } = auth;

import Form from "../../components/Form"

const fields = [
    {
        key: 'email',
        label: "Correo electrónico",
        placeholder: "Correo electrónico",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "email"
    },
    {
        key: 'password',
        label: "Contraseña",
        placeholder: "Contraseña",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "password"
    },
    {
        key: 'confirm_password',
        label: "Confirmar contraseña",
        placeholder: "Confirmar contraseña",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "confirm_password"
    }
];

const error = {
    general: "",
    email: "",
    password: "",
    confirm_password: ""
}

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            error: error
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onSubmit(data) {
        this.setState({error: error}); //clear out error messages

        this.props.register(data, this.onSuccess, this.onError)
    }

    onSuccess(user) {
        Actions.CompleteProfile({ user })
    }

    onError(error) {
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        this.setState({error: errObj});
    }

    render() {
        return (
                <Form fields={fields}
                      showLabel={false}
                      onSubmit={this.onSubmit}
                      buttonTitle={"INICIAR SESIÓN"}
                      error={this.state.error}/>
        );
    }
}

export default connect(null, { register })(Register);
