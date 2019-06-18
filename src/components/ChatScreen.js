import React from 'react'; 
import {Media} from 'reactstrap'
import Chat from './Chat';
import MessageBox from './MessageBox';

const ChatScreen = () => {
  return (
    
    <div style={{height:"100%"}}>
        
        
        <div className="h-75 block" style={{height:"100%" , marginBottom:"65px" , overflow:'scroll'}} >
          <h4>Screen</h4>
          <Media list>
            <Chat/>
          </Media>
        </div>
    
        <div className="h-25 block" style={{height:"100%" , position: 'fixed',bottom:'75px' , marginTop:'65px'}} >     
            <MessageBox/> 
        </div>
        
        
       
        
    </div>
  )
}

export default ChatScreen;
