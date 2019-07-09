/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter ,Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle , InputGroup, InputGroupAddon , Input} from 'reactstrap';
import {connect} from 'react-redux'; 
import { activateUserAction } from './../store/actions/actions';
import CreateContact from './CreateContact';
import EscapeRegExp from 'escape-string-regexp';


class AllContacts extends React.Component {
 
    state = {
      modal: false, 
      nestedModal: false,
      querry:""
      
      
    };

    toggleNested=()=> {
        this.setState({
          nestedModal: !this.state.nestedModal,
          closeAll: false
        });
      }
    

    handleChange =(e)=>{
        this.setState({
          querry:(e.target.value)
        })
        
      };
 

  
  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
     
    }));
  }

  render() {
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
        <Button  onClick={this.toggle}>{this.props.buttonLabel}Contacts</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>List of Contacts</ModalHeader>
          
          <ModalBody>
          <Card>
          <div>
          <InputGroup>
            <InputGroupAddon addonType="prepend">find</InputGroupAddon>
            <Input placeholder="Seach Contact" onChange={this.handleChange} />
          </InputGroup>
         </div>  
         <br/>
         
          
          {showingList.map((user)=>( <Card>
           
              <CardBody className={`${user.active ? "active" : ""}`} >
              <CardImg top width="100%" className="rounded-circle" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="contactImage" />  
                <CardTitle>{user.firstName} {user.lastName}</CardTitle>
                <CardSubtitle>
                  <small className="text-muted">{(user.messages[0])?(user.messages[0].date):(<h5>--</h5>)}</small>
                </CardSubtitle>
                <CardText><Button color="primary"
                onClick={() => (this.props.activateUser(user) && (this.setState({modal: false})))}>Start Chat</Button></CardText>
                

              </CardBody>
              
            </Card>)) }
            
            
  
            
          </Card>
              
          </ModalBody>
          <ModalFooter>
            
            <Button onClick={this.toggleNested}><CreateContact /></Button>
            
              
              
      
            
          
          
          </ModalFooter>
            
        </Modal>
      </div>
    );
  }
}

const mapStateToProps =(state)=>{
    return {
      usersList : state.msgs.users
    }
  }; 
  
  const mapDispatchToProps =(dispatch) =>{
    return {
      activateUser : (user)=>dispatch(activateUserAction(user))
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(AllContacts);
