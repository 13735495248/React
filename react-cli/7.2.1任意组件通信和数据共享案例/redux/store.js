import {createStore} from 'redux'

function scoreReducer(state=57,action){
    const {type} = action;
    switch (type) {
        case 'add':
            return state+1;
        default:
            return state;
    }
}

export default createStore(scoreReducer)