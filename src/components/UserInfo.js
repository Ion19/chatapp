import React, { Component } from 'react'; 
import {Form , FormGroup , Label , Input ,Button} from 'reactstrap';

class UserInfo extends Component {
  render() {
    return (
      <div>
        <Button  onClick={this.toggle}>{this.props.buttonLabel}CreateContact</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Create a new contact</ModalHeader>
          
          <ModalBody>
            
               
          </ModalBody>
          <ModalFooter>
                
          </ModalFooter>
            </Form>
        </Modal>
      </div>
    )
  }
}

export default UserInfo;

