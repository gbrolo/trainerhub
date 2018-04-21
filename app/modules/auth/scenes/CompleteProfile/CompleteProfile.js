import React from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { createUser } = auth;

import Form from "../../components/Form"

const fields = [
    {
        key: 'username',
        label: "Nombre",
        placeholder: "Ingrese su nombre",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    },
    {
        key: 'age',
        label: "Edad",
        placeholder: "Ingrese su edad",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "text"
    },
    {
        key: 'weight',
        label: "Peso",
        placeholder: "Ingrese su peso en libras",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "number"
    },
    {
        key: 'height',
        label: "Estatura",
        placeholder: "Ingrese su estatura en centímetros",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "number"
    }
];

const error = {
    general: "",
    username: ""
}

class CompleteProfile extends React.Component {
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

        //attach user id
        const { user } = this.props;
        data['uid'] = user.uid;

        this.props.createUser(data, this.onSuccess, this.onError)
    }

    onSuccess() {
        Actions.Main()
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
                      buttonTitle={"CONTINUAR"}
                      error={this.state.error}/>
        );
    }
}

export default connect(null, { createUser })(CompleteProfile);
