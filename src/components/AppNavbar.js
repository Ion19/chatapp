import React, { Component } from 'react'; 
import {
    
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, 
    Container
    } from 'reactstrap';
    import CreateContact from './CreateContact';

class AppNavbar extends Component {  
    state = {
        isOpen: false
      };
    
  
      toggle = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  
    render() {
    return (
      
        <div>
        <Navbar color="dark" dark expand="md" className="mb-5">
            <Container>
          <NavbarBrand href="/">ChatPlus</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><CreateContact/></NavLink>
              </NavItem>
             
            </Nav>
          </Collapse>
          </Container>
        </Navbar>
      </div>
      
    );
  };
};

export default AppNavbar;
