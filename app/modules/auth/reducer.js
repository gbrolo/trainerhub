import { AsyncStorage } from 'react-native';

import * as t from './actionTypes';

let initialState = { isLoggedIn: false, user: null };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.LOGGED_IN:
            state = Object.assign({}, state, { isLoggedIn: true, user: action.data.user });
            return state;

        case t.LOGGED_OUT:
            let keys = ['user'];
            AsyncStorage.multiRemove(keys);

            state = Object.assign({}, state, {isLoggedIn: false, user: null });

            return state;

        default:
            return state;
    }
};

export default authReducer;
