import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, InputGroupAddon ,Input ,InputGroup } from 'reactstrap';
  import {connect} from 'react-redux'; 
  import { activateUserAction } from './../store/actions/actions';
  import EscapeRegExp from 'escape-string-regexp';



class ContactSummery extends React.Component {

  state = {
    querry:""
  }


  handleChange =(e)=>{
    this.setState({
      querry:(e.target.value)
    })
    
  };

  render(){
    const { usersList } = this.props;
          let list = usersList    
        

        let showingList ; 

        if(this.state.querry){
            const match = new RegExp(EscapeRegExp(this.state.querry),'i');

            showingList=list.filter((user)=>(match.test(user.firstName)||match.test(user.lastName) ));
        }
        else {
            showingList=list;
        }
  return (
    <div>
      
        <Card>
        <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">find</InputGroupAddon>
            <Input placeholder="Seach Contact" onChange={this.handleChange} />
          </InputGroup>
         </div>  
        {showingList.map((user)=>( 
        ((user.messages[0]) ? (<Card>
        
          <CardBody className={`${user.active ? "active" : ""}`}  onClick={() => this.props.activateUser(user)}>
          <CardImg top width="100%" className="rounded-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="contactImage" />  
            <CardTitle>{user.firstName} {user.lastName}</CardTitle>
            <CardSubtitle>
              <small className="text-muted">{(user.messages[0])?(user.messages[0].date):(<h5>--</h5>)}</small>
            </CardSubtitle>
            <CardText>{(user.messages[0])?(user.messages[0].msg):(<h5>Click to start chat now</h5>)}</CardText>
            
          </CardBody>
          
        </Card>): (null))
        )) }
          
          

          
        </Card>

        
     
    </div>
  );
}
};

const mapStateToProps =(state)=>{
  return {
    usersList : state.msgs.users
  }
}; 

const mapDispatchToProps =(dispatch) =>{
  return {
    activateUser : (user)=>dispatch(activateUserAction(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactSummery);