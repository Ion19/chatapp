import {combineReducers} from 'redux'; 
import usersReducer from './usersReducer'; 
import msgsReducer from './msgsReducer'; 


export default combineReducers({
    users : usersReducer, 
    msgs : msgsReducer
}

); 