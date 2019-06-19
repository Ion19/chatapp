/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form, FormGroup, Label, Input } from 'reactstrap';
import uuid from 'uuid';
import {connect} from 'react-redux'; 
import {addUserAction} from '../store/actions/actions';


class CreateContact extends React.Component {
 
    state = {
      modal: false, 
      firstName:'',
      lastName:'',
      phoneNumber:'',
      userId:uuid(),
      messages:[], 
      active:false, 
      image:''
      
    };

    
  handleChange =(e)=>{

    this.setState({
        [e.target.name]:(e.target.value)
    })
  }; 

  handleSubmit = (e) =>{
      e.preventDefault(); 
      this.setState({
        userId:uuid()
      })
      this.props.addUser(this.state);
      
      
  }

  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button  onClick={this.toggle}>{this.props.buttonLabel}CreateContact</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create a new contact</ModalHeader>
          <Form onSubmit={this.handleSubmit}>
          <ModalBody>
            
                <FormGroup>
                <Label for="phoneNumber">Phone number</Label>
                <Input type="text" name="phoneNumber" id="phoneNumber" placeholder="add your a valid number" onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                type="text"
                name="firstName" 
                id="firstName" 
                placeholder="add your First Name"
                onChange={this.handleChange} />
                </FormGroup>

                <FormGroup>
                <Label for="lastName">Last Name </Label>
                <Input 
                type="text" 
                name="lastName" 
                id="lastName" 
                placeholder="add your Last Name"
                onChange={this.handleChange} />
                </FormGroup>
            
          </ModalBody>
          <ModalFooter>
                <Button type="submit" color="primary" onClick={this.toggle}>Create</Button>
            
                </ModalFooter>
            </Form>
        </Modal>
      </div>
    );
  }
}

const  mapDispatchToProps =(dispatch)=>{
    return {
        addUser: (user)=>dispatch(addUserAction(user))
    }

}

export default connect(null, mapDispatchToProps)(CreateContact);