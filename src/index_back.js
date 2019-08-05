import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Start of redux
// import { createStore } from 'redux';
import { combineReducers,createStore } from 'redux';
/*
Example: 1
function reducer(state,action){
    // console.log(action)
    if(action.type === 'changeState'){
        return action.payload.newState;
    }
    return 'state';
}
*/
function productReducer(state=[],action){
   return state;
}
/*
Eg:3
function userReducer(state='',action){
    return state;
}
*/
/*
eg 4:
function userReducer(state='',action){
    switch(action.type){
        case 'UPDATE_USER':
            return action.payload.user;
    }    
    return state;
}
*/
// Destructing in ES6
function userReducer(state='',{type,payload}){
    switch(type){
        case 'UPDATE_USER':
            return payload.user;
    }    
    return state;
}
const allReducers = combineReducers({
    product:productReducer,
    user:userReducer
});

/*
eg:2 
const store = createStore(allReducers);
*/

const store = createStore(allReducers,
    {
        product: [{ name: 'Nokia' }],
        user: 'Krishnaprasad'
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

/*
const store = createStore(reducer);
Example: 1
console.log(store.getState())
const action = {
    type:'changeState',
    payload:{
        newState : 'New State'
    }
}
store.dispatch(action)
*/
console.log(store.getState())


const updateUser = {
    type:'UPDATE_USER',
    payload:{
        user : 'Vijay'
    }
}
store.dispatch(updateUser)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
