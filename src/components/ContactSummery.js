import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle ,Button } from 'reactstrap';
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
            <CardBody onClick={() => this.props.activateUser(user)}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />  
              <CardTitle>{user.firstName} {user.lastName}</CardTitle>
              <CardSubtitle>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardSubtitle>
              <CardText>Some quick example text to build.</CardText>
              <Button>Chat</Button>
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