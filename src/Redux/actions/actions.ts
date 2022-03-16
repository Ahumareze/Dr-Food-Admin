import * as actionTypes from './actionTypes';

const init = () => {
    return (dispatch: any) => {
        const arr = localStorage.getItem('@dr_foodCart');
        console.log(arr)
    }
};

const signUp = () => {
    console.log('dispatchhe')
    return (dispatch: any) => {
        console.log('dispatchhe')
    }
}

const setToken = (e: string) => {
    return{
        type: actionTypes.SETTOKEN,
        value: e
    }
}

export {
    init,
    setToken,
    signUp
}