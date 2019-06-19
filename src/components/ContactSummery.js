import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle } from 'reactstrap';
  import {connect} from 'react-redux'; 
  import { activateUserAction } from './../store/actions/actions';



class ContactSummery extends React.Component {

  // handleSelectUser = (user)=>{
  //   console.log(user)
  // }
  
  render(){
  return (
    <div>
      
        <Card>
          
        {this.props.usersList.map((user)=>( <Card>
         
            <CardBody className={`${user.active ? "active" : ""}`}  onClick={() => this.props.activateUser(user)}>
            <CardImg top width="100%" className="rounded-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="contactImage" />  
              <CardTitle>{user.firstName} {user.lastName}</CardTitle>
              <CardSubtitle>
                <small className="text-muted">{(user.messages[0])?(user.messages[0].date):(<h5>--</h5>)}</small>
              </CardSubtitle>
              <CardText>{(user.messages[0])?(user.messages[0].msg):(<h5>Click to start chat now</h5>)}</CardText>
              
            </CardBody>
            
          </Card>)) }
          
          

          
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