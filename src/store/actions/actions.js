import {MESSAGE_SENT , ADD_USER , ACTIVATE_USER} from './types'; 

export const sendMessageAction =(message)=>{
    return {
        type:MESSAGE_SENT, 
        payload:message
    }
};

export const addUserAction =(user)=>{
    return {
        type:ADD_USER, 
        payload:user
    }
};

export const activateUserAction =(user)=>{
    return {
        type:ACTIVATE_USER, 
        payload:user
    }
};
