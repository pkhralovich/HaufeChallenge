import {createStore} from 'redux';

const initialState = {
    name: "kpose"
};


const reducer = (state = initialState, action) => {
    
}

const store = createStore(reducer);
export default store;