import axios from 'axios';
import { dbUrl } from '../../config/urls';
import * as actionTypes from './actionTypes';

const init = () => {
    const token = localStorage.getItem('@drFoodToken')
    return (dispatch: any) => {
        if(token){
            dispatch(setToken(token))
        }
    }
};

const AUTH = (username: string, password: string) => {
    return (dispatch: any) => {
        const data = {
            username,
            password
        }
        axios.post(dbUrl + 'auth', data)
            .then(r => {
                console.log(r.data)
            })
            .catch(e => {
                console.log(e + 'error')
            })
    }
}

const setToken = (e: string) => {
    console.log('reached')
    return{
        type: actionTypes.SETTOKEN,
        value: e
    }
}

export {
    init,
    AUTH
}