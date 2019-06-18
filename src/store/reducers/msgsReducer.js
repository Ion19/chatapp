import {MESSAGE_SENT , ADD_USER , ACTIVATE_USER} from '../actions/types'; 
;

const initState = {
    users: [ 

       
       
    ],
    activeUser:{}

    

   
};



const msgsReducer = (state=initState , action) =>{
    switch (action.type){

        case ADD_USER:
            return {...state ,
                users:[...state.users, action.payload] }

        case ACTIVATE_USER:
                

            return {
                ...state , 
                users:state.users.map((user)=>user.userId===action.payload.userId ? {...user, active:true }: {...user , active:false} ),
                activeUser:{...action.payload , active:true }
                
        }
        
        case MESSAGE_SENT:
            return {
        ...state , 
        users:state.users.map((user)=>user.userId===action.payload.to   ?  {...user , messages:[...user.messages , action.payload]}  : {...user ,messages:[...user.messages]} ), 
        activeUser:{...state.activeUser , messages:[...state.activeUser.messages , action.payload]} 
        
        
        
        }

        default: 
        return state
    }
}; 

export default msgsReducer;