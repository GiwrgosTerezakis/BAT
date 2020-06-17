import modelReducer from './selectedM';
import {combineReducers} from 'redux';
import axiosJson from './axiosJson.js';



const rootReducers = combineReducers({
    modelReducer,
    axiosJson
});

export default rootReducers;