import React from 'react'; 
import {Media} from 'reactstrap'
import Chat from './Chat';
import MessageBox from './MessageBox';

const ChatScreen = () => {
  return (
    
    <div style={{height:"100%"}}>
        
        
        <div className="h-75 block" style={{height:"100%"}} >
          <h4>Screen</h4>
          
          <Media list>
            <Chat/>
          </Media>
        </div>
    
        <div className="h-25 block" style={{height:"100%"}} >     
            <MessageBox/> 
        </div>
        
        
       
        
    </div>
  )
}

export default ChatScreen;
