import * as actionType from '../actions/actionTypes';

const initialState = {
    token: null
};

const reducer = (state = initialState, action: any) => {
    switch(action.type){
        case actionType.SETTOKEN:
            return {...state, token: action.value}
    }
    return state;
};

export default reducer;