import * as actionTypes from './actionTypes';

const init = () => {
    const token = localStorage.getItem('@drFoodToken')
    setToken('hello')
};

const setToken = (e: string) => {
    console.log('hello')
    return{
        type: actionTypes.SETTOKEN,
        value: e
    }
}

export {
    init,
    setToken
}