import {MESSAGE_SENT , ADD_USER , ACTIVATE_USER} from '../actions/types'; 
;

const initState = {
    users: [ 

        {
            modal: false,
            firstName: 'aaa',
            lastName: 'aaaa',
            phoneNumber: '01061232689',
            userId: '610cd060-3a9a-432d-997d-70283c4efde4',
            messages: [
              {
                date: 1562686342235,
                author: 'user',
                msg: '',
                id: '9b573eaa-225d-43ed-9c4a-21792377351c',
                send: true,
                to: '610cd060-3a9a-432d-997d-70283c4efde4'
              },
              {
                date: 1562686341747,
                author: 'user',
                msg: '',
                id: '5756fae5-5a09-4dcc-a140-79c86573c9f2',
                send: true,
                to: '610cd060-3a9a-432d-997d-70283c4efde4'
              },
              {
                date: 1562686340626,
                author: 'user',
                msg: '',
                id: '3d821959-8932-4e41-845f-8bfd22bc5ee3',
                send: true,
                to: '610cd060-3a9a-432d-997d-70283c4efde4'
              },
              {
                date: 1562686337337,
                author: 'user',
                msg: 'S SNKS',
                id: '6d35ac0d-a173-455e-905f-257adf218bea',
                send: true,
                to: '610cd060-3a9a-432d-997d-70283c4efde4'
              }
            ],
            active: true,
            image: ''
          }
       
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
        users:state.users.map((user)=>user.userId===action.payload.to   ?  {...user , messages:[action.payload , ...user.messages ]}  : {...user ,messages:[...user.messages]} ), 
        activeUser:{...state.activeUser , messages:[ ...state.activeUser.messages,  action.payload ]} 

        
        
        
        }

        default: 
        return state
    }
}; 

export default msgsReducer;