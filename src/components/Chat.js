import React from 'react'; 
import { Media } from 'reactstrap';
import {connect} from 'react-redux';


class Chat extends React.Component {
          
  render(){
  
  return (
    <div> 
      
      {this.props.activeUserMessages && this.props.activeUserMessages.map((message)=>(  
      
      (message.send)? (   
      
      <Media className="mb-4" tag="li">
      <Media left top href="#">
        <Media object data-src="holder.js/64x64" alt="userImage" className="rounded-circle" />
      </Media>
      <Media body>
        <Media heading>
          {message.author}
        </Media>
            <span>{message.msg}</span> 
      </Media>
      </Media>
      ) : 
      (<Media className="mb-4" tag="li">
      <Media body>
        <Media heading>
        {message.author}
        </Media>
        <span>{message.msg}</span>  
      </Media>
      <Media right bottom  href="#">
        <Media object  data-src="holder.js/64x64" alt="imageUser" className="rounded-circle" />
      </Media>
    </Media>)
      
      ))
      }

</div>
   ); 
  }
    }
    
            
    
  



const mapStateToProps = (state) =>{
  return {
    activeUserMessages : state.msgs.activeUser.messages
  }
}

export default connect(mapStateToProps)(Chat)
