import React, { Component } from 'react'; 
import {Card , Form , CardBody, CardText , CardImg,Button,FormText , FormGroup , Input} from 'reactstrap';
import uuid from 'uuid';
import {sendMessageAction} from '../store/actions/actions';
import {connect} from 'react-redux';

class MessageBox extends Component {
  state={ 
    date:Date.now(), 
    author:'user', 
    msg:'', 
    id:uuid(), 
    send:true, 
    to:''
  } 
  
    

    handleChange = (e)=>{
      this.setState({[e.target.name]:(e.target.value)}); 
      console.log(this.state)
    };
    
     
     
  handleSubmit=(e)=>{
    e.preventDefault(); 

    this.setState({
      date:Date.now(), 
      author:'user',
      id:uuid(), 
      send:true,
      to:(this.props.activeUser.userId)
      
    },
    () => {
      this.props.sendMessage((this.state)); 
      this.setState({msg:''})
    }); 
    
  }

  

      
  

  render() {
    
   
    
    return (
      
      <div>
        {(this.props.activeUser.messages) ? (
        <Card>
        <CardBody>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="userImage" className="rounded-circle" />  
              
              
              <CardText>
                <Form onSubmit={this.handleSubmit}>

                    <div class="form-group">    
                    <textarea className="form-control" value={this.state.msg} id="exampleFormControlTextarea1" rows="3" name="msg" onChange={this.handleChange}></textarea>
                    </div>

                    <FormGroup>
                    
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                        This is some placeholder block-level help text for the above input.
                        It's a bit lighter and easily wraps to a new line.
                    </FormText>
                    </FormGroup>

                    <Button color="primary">Send</Button>
                </Form>
              </CardText>
            </CardBody>
        </Card>
        ):(<div style={{minHeight:"300px"}}><h4>select a user</h4></div>) }
      </div>
    )
  }
}


const mapStateToProps = (state) =>{
  return {
    users : state.msgs.users, 
    activeUser:state.msgs.activeUser
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    sendMessage: (message)=>dispatch(sendMessageAction(message))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MessageBox);
